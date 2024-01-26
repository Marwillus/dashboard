import { ArchersBow, Home, MarketAnalysis, Microscope, SunOne } from "@icon-park/react";
import Menu from "../../components/menu/Menu"
import Widget from "../../components/widget/Widget"
import './Dashboard.scss'

const menuItem = [
    { label: 'Home', icon: <Home /> },
    { label: 'Weather', icon: <SunOne /> },
    { label: 'Economy', icon: <MarketAnalysis /> },
    { label: 'Science', icon: <Microscope /> },
    { label: 'Sports', icon: <ArchersBow /> },
];

function Dashboard() {
    return (
        <div className="dashboard">
            <Menu></Menu>

            <div>
                <div className="dashboard__header">
                    <h2>Welcome back, Friend</h2>
                </div>
                <div className="dashboard__grid">
                    <div className="dashboard__grid__widget1">
                        <Widget></Widget>
                    </div>
                    <div className="dashboard__grid__widget2">
                        <Widget></Widget>
                    </div>
                    <div className="dashboard__grid__widget3">
                        <Widget></Widget>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
