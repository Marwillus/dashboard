import { ArchersBow, Home, MarketAnalysis, Microscope, SunOne, User } from "@icon-park/react";
import Menu from "../../components/menu/Menu"
import Widget from "../../components/widget/Widget"
import './Dashboard.scss'
import { useState } from "react";
import { newsMockData } from '../../api/mockdata'
import { newsUrlTop } from "../../api/endpoints";

const country='de'

const menuItems = [
    {
        topic: 'Home',
        icon: <Home />,
        header: "Welcome back, Friend",
        api: `${newsUrlTop}?country=${country}`,
        bgColor: "#ffb457"
    },
    { topic: 'Weather', icon: <SunOne /> },
    { topic: 'Economy', icon: <MarketAnalysis /> },
    { topic: 'Science', icon: <Microscope /> },
    { topic: 'Sports', icon: <ArchersBow /> },
    { topic: 'Profil', icon: <User /> },
];

function Dashboard() {
    const [activeTopic, setActiveTopic] = useState(0)

    const data = newsMockData

    return (
        <div className="dashboard">
            <Menu setActiveTopic={setActiveTopic} />

            <div className="dashboard__content">
                <div className="dashboard__header">
                    <h2>{menuItems[activeTopic].topic}</h2>
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
