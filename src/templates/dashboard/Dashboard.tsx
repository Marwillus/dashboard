import { ArchersBow, Home, MarketAnalysis, Microscope, SunOne, User } from "@icon-park/react";
import Menu from "../../components/menu/Menu"
import Widget from "../../components/widget/Widget"
import './Dashboard.scss'
import { useEffect, useState } from "react";
import { newsMockData } from '../../api/mockdata'
import { newsUrlTop } from "../../api/endpoints";
import axios from "axios";

export interface MenuItem {
    topic: string;
    icon: JSX.Element;
    header?: string;
    api: string;
    bgColor: string;
}

const country = 'us'

const menuItems: MenuItem[] = [
    {
        topic: 'Home',
        icon: <Home />,
        header: "Welcome back, Friend",
        api: `${newsUrlTop}?country=${country}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`,
        bgColor: "#ffb457"
    },
    // TODO: design weather widgets
    // { topic: 'Weather', icon: <SunOne /> },
    {
        topic: 'Economy',
        icon: <MarketAnalysis />,
        api: `${newsUrlTop}?category=business&country=${country}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`,
        bgColor: "#ff96bd"
    },
    {
        topic: 'Science',
        icon: <Microscope />,
        api: `${newsUrlTop}?category=science&country=${country}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`,
        bgColor: "#9999fb"
    },
    {
        topic: 'Sports',
        icon: <ArchersBow />,
        api: `${newsUrlTop}?category=sports&country=${country}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`,
        bgColor: "#ffe797"
    },
    // TODO: add user section
    // { topic: 'Profil', icon: <User /> , bgColor: '#cffff1'},
];

function Dashboard() {
    const [activeTopic, setActiveTopic] = useState(0)
    const [newsData, setNewsData] = useState(null)

    useEffect(() => {
        if (menuItems[activeTopic].api) {
            axios.get(menuItems[activeTopic].api)
                .then(response => {
                    // console.log(response.data);
                    setNewsData(response.data)
                });
        }
    }, [activeTopic])

    return (
        <div className="dashboard">
            <Menu setActiveTopic={setActiveTopic} menuItems={menuItems}/>

            <div className="dashboard__content">
                <div className="dashboard__header">
                    <h3>{menuItems[activeTopic].header ?? menuItems[activeTopic].topic}</h3>
                </div>
                <div className="dashboard__grid">
                    {(newsData ?? newsMockData).articles.map((article, index) => {
                        if (index <= 2) return (
                            <div key={'widget-' + index} className={"dashboard__grid__widget-" + index}>
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
