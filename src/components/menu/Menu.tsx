import './Menu.scss';

import { SetStateAction, useCallback, useEffect, useRef, useState } from 'react';

import { MenuItem } from '../../templates/dashboard/Dashboard';

interface MenuProps {
  setActiveTopic: React.Dispatch<SetStateAction<number>>;
  menuItems: MenuItem[];
}

function Menu({ setActiveTopic, menuItems }: MenuProps) {
  const [activeElementsIndex, setActiveElementsIndex] = useState(0);

  const menu = useRef<HTMLDivElement>(null);
  const activeIndicator = useRef<HTMLDivElement>(null);

  const activeItem = useCallback((node: HTMLButtonElement) => {
    if (node !== null) {
      moveIndicator(node);
    }
  }, []);

  const handleClickItem = (index: number) => {
    setActiveElementsIndex(index);
    setActiveTopic(index);
    const root = document.querySelector<HTMLHtmlElement>(":root");
    root?.style.setProperty("--bgColorMenuItem", menuItems[index].bgColor);
  };

  const moveIndicator = (node: Element) => {
    if (!activeIndicator.current || !menu.current) return;

    const offsetActiveItem = node.getBoundingClientRect();
    const left =
      Math.floor(
        offsetActiveItem.left -
          menu.current.offsetLeft -
          (activeIndicator.current.offsetWidth - offsetActiveItem.width) / 2
      ) + "px";
    activeIndicator.current.style.transform = `translate3d(${left}, 0 , 0)`;
  };

  useEffect(() => {
    const handleWindowResize = () => {
      const activeNode: Element | null | undefined =
        menu.current?.querySelector(".menu__item--active");
      if (activeNode) {
        moveIndicator(activeNode);
      }
    };
    // execute once on window reload
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="menu" ref={menu}>
      {menuItems.map((item, index) => {
        const isActive = index === activeElementsIndex;

        return (
          <button
            key={"menu-item-" + index}
            className={`menu__item ${isActive ? "menu__item--active" : ""}`}
            onClick={() => handleClickItem(index)}
            ref={isActive ? activeItem : null}
          >
            {item.icon}
          </button>
        );
      })}

      <div className="menu__active-indicator" ref={activeIndicator}></div>
      <div className="svg-container">
        <svg viewBox="0 0 202.9 45.5">
          <clipPath
            id="menu"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.0052 0.021978021978022)"
          >
            <path d="M 0 0 c 5.7 -0.1 14.1 0.4 23.3 4 c 5.7 2.3 9.9 5 18.1 10.5 c 10.7 7.1 11.8 9.2 20.6 14.3 c 5 2.9 9.2 5.2 15.2 7 c 7.1 2.1 13.3 2.3 17.6 2.1 c 4.2 0.2 10.5 -0.1 17.6 -2.1 c 6.1 -1.8 10.2 -4.1 15.2 -7 c 8.8 -5 9.9 -7.1 20.6 -14.3 c 8.3 -5.5 12.4 -8.2 18.1 -10.5 c 9.2 -3.6 17.6 -4.2 23.3 -4 H 161.2 z" />
          </clipPath>
        </svg>
      </div>
    </div>
  );
}

export default Menu;
