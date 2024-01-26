import { ArchersBow, Home, MarketAnalysis, Microscope, SunOne, User } from "@icon-park/react";
import Menu from "../../components/menu/Menu"
import Widget from "../../components/widget/Widget"
import './Dashboard.scss'
import { useEffect, useState } from "react";
import { newsMockData } from '../../api/mockdata'
import { newsUrlTop } from "../../api/endpoints";

const country = 'de'

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
                    <h3>{menuItems[activeTopic].header ?? menuItems[activeTopic].topic}</h3>
                </div>
                <div className="dashboard__grid">
                    {data.articles.map((article, index) => {
                        if (index <= 2) return (
                            <div className={"dashboard__grid__widget-" + index}>
                                <Widget
                                    author={article.author}
                                    title={article.title}
                                    description={article.description}
                                    url={article.url}
                                    urlToImage={article.urlToImage}
                                    content={article.content}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
