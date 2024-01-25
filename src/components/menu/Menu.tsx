import { ArchersBow, Home, MarketAnalysis, Microscope, SunOne } from '@icon-park/react';
import './Menu.scss'
import { useEffect, useRef, useState } from 'react';

const navigationItems = [
    { label: 'Home', icon: <Home /> },
    { label: 'Weather', icon: <SunOne /> },
    { label: 'Economy', icon: <MarketAnalysis /> },
    { label: 'Science', icon: <Microscope /> },
    { label: 'Sports', icon: <ArchersBow /> },
];

function Menu() {
    const [activeElementsIndex, setActiveElementsIndex] = useState(0)
   
    const activeItemRef = useRef<HTMLButtonElement>(null);
    const activeIndicator = useRef<HTMLDivElement>(null)
    const menu = useRef<HTMLDivElement>(null)
 
    const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];

    useEffect(() => {
        moveIndicator();
        
      }, [activeItemRef.current]);

    const clickItem = (index: number) => {
        setActiveElementsIndex(index)
        document.body.style.backgroundColor = bgColorsBody[index];
    }

    const moveIndicator = () => {
        if (!activeItemRef.current || !activeIndicator.current || !menu.current) return
        
        const offsetActiveItem = activeItemRef.current.getBoundingClientRect();
        const left = Math.floor(offsetActiveItem.left - menu.current.offsetLeft - (activeIndicator.current.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
        activeIndicator.current.style.transform = `translate3d(${left}, 0 , 0)`;
    }


    return (
        <div className='menu' ref={menu}>
            {navigationItems.map((item, index) => {
                const isActive = index === activeElementsIndex

                return (<button
                    key={'menu-item-' + index}
                    className={`menu__item ${isActive ? 'menu__item--active' : ''}`}
                    style={{ "--bgColorItem": bgColorsBody[index] } as React.CSSProperties}
                    onClick={() => clickItem(index)}
                    ref={isActive ? activeItemRef : null}
                >
                    {item.icon}
                </button>)
            })}


            <div className="menu__active-indicator" ref={activeIndicator}></div>
            <div className="svg-container">
                <svg viewBox="0 0 202.9 45.5" >
                    <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)">
                        <path d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
                                c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
                                c9.2,3.6,17.6,4.2,23.3,4H6.7z"/>
                    </clipPath>
                </svg>
            </div>
        </div>
    )
}

export default Menu