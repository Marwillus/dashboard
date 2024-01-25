import { ArchersBow, Home, MarketAnalysis, Microscope, SunOne } from '@icon-park/react';
import './Menu.scss'

function Menu() {
    return (
        <div className='menu'>
            <button>
                <Home />
            </button>
            <button>
                <SunOne />
            </button>
            <button>
                <MarketAnalysis />
            </button>
            <button>
                <Microscope />
            </button>
            <button>
                <ArchersBow />
            </button>
        </div>
    )
}

export default Menu