import { ArchersBow, Home, MarketAnalysis, Microscope, SunOne, User } from "@icon-park/react";
import Menu from "../../components/menu/Menu"
import Widget from "../../components/widget/Widget"
import './Dashboard.scss'
import { useEffect, useState } from "react";
import { newsMockData } from '../../api/mockdata'
import { newsUrlAll, newsUrlTop } from "../../api/endpoints";
import axios from "axios";

const country = 'us'
const resultSize = '3'

const menuItems = [
    {
        topic: 'Home',
        icon: <Home />,
        header: "Welcome back, Friend",
        api: `${newsUrlTop}?country=${country}&pageSize=${resultSize}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`,
        bgColor: "#ffb457"
    },
    // TODO: design weather widgets
    // { topic: 'Weather', icon: <SunOne /> },
    {
        topic: 'Economy',
        icon: <MarketAnalysis />,
        header: "Welcome back, Friend",
        api: `${newsUrlTop}?category=business&country=${country}&pageSize=${resultSize}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`,
        bgColor: "#ffb457"
    },
    {
        topic: 'Science',
        icon: <Microscope />,
        header: "Welcome back, Friend",
        api: `${newsUrlTop}?category=science&country=${country}&pageSize=${resultSize}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`,
        bgColor: "#ffb457"
    },
    {
        topic: 'Sports',
        icon: <ArchersBow />,
        header: "Welcome back, Friend",
        api: `${newsUrlTop}?category=sports&country=${country}&pageSize=${resultSize}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`,
        bgColor: "#ffb457"
    },
    // TODO: add user section
    // { topic: 'Profil', icon: <User /> },
];

function Dashboard() {
    const [activeTopic, setActiveTopic] = useState(0)
    const [newsData, setNewsData] = useState(null)

    useEffect(() => {
        console.log(menuItems[activeTopic].api);

        if (menuItems[activeTopic].api) {
            axios.get(menuItems[activeTopic].api)
                .then(response => {
                    console.log(response.data);
                    setNewsData(response.data)
                });
        }
    }, [activeTopic])

    return (
        <div className="dashboard">
            <Menu setActiveTopic={setActiveTopic} />

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
