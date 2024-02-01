import './Dashboard.scss';

import { useEffect, useState } from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

import { ArchersBow, Home, MarketAnalysis, Microscope, SunOne } from '@icon-park/react';

import { newsUrlTop, weatherApiCurrent } from '../../api/endpoints';
import { newsMockData, weatherMockDataCurrent, weatherMockDataForecast } from '../../api/mockdata';
import { NewsData, WeatherDataCurrent, WeatherDataForecast } from '../../api/types';
import Menu from '../../components/menu/Menu';
import Widget from '../../components/widget/Widget';
import { getLocation, Location } from '../../utils/helper/location';

export interface MenuItem {
  topic: string;
  icon: JSX.Element;
  header?: string;
  bgColor: string;
}

export interface ApiData {
  weather?: WeatherDataCurrent;
  news?: NewsData;
}

const country = "us";

//use browser location or location from berlin
const location: Location = getLocation() ?? {
  lat: "52.520008",
  long: "13.404954",
};

export enum CATEGORIES {
  HOME = "home",
  WEATHER = "Weather",
  ECONOMY = "Economy",
  SCIENCE = "Science",
  SPORTS = "Sports",
  USER = "User",
}

export const menuItems: MenuItem[] = [
  {
    topic: CATEGORIES.HOME,
    icon: <Home />,
    header: "Welcome back, Friend",
    bgColor: "#ffb457",
  },
  { topic: CATEGORIES.WEATHER, icon: <SunOne />, bgColor: "#eeff96" },
  {
    topic: CATEGORIES.ECONOMY,
    icon: <MarketAnalysis />,
    bgColor: "#ff96bd",
  },
  {
    topic: CATEGORIES.SCIENCE,
    icon: <Microscope />,
    bgColor: "#9999fb",
  },
  {
    topic: CATEGORIES.SPORTS,
    icon: <ArchersBow />,
    bgColor: "#ffe797",
  },
  // TODO: add user section
  // { topic: 'Profil', icon: <User /> , bgColor: '#cffff1'},
];

const mockData: ApiData = {
  weather: weatherMockDataCurrent,
  news: newsMockData,
};

function Dashboard() {
  const [activeTopic, setActiveTopic] = useState(0);
  const [data, setData] = useState<ApiData | null>(null);
  const [forecast, setForecast] = useState<WeatherDataForecast>(
    weatherMockDataForecast
  );
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const category = menuItems[activeTopic].topic;

  useEffect(() => {
    //   setLoading(true);

    // GET Category Home Data
    if (category === CATEGORIES.HOME) {
      const newsApi = `${newsUrlTop}?country=${country}&apiKey=${
        import.meta.env.VITE_NEWS_API_KEY
      }`;
      const weatherApiOptions = {
        method: "GET",
        url: weatherApiCurrent,
        params: { q: `${location.lat},${location.long}` },
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_WEATHER_API_KEY,
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };

      // axios.request(weatherApiOptions)
      //   .then(response => {
      //       console.log(response.data);
      //       setWeatherData(response.data)
      //   })
      // .catch(e => setError(e))
      // .finally(() => setLoading(false))
      return;
    }

    // GET Category Weather Data
    // if (category === CATEGORIES.WEATHER) {
    //   const weatherApiOptions = {
    //     method: "GET",
    //     url: weatherApiForecast,
    //     params: { q: "Berlin", days: "6" },
    //     headers: {
    //       "X-RapidAPI-Key": import.meta.env.VITE_WEATHER_API_KEY,
    //       "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    //     },
    //   };
    //   axios
    //     .request(weatherApiOptions)
    //     .then((response) => {
    //       console.log(response.data);
    //       setForecast(response.data);
    //     })
    //     .catch((e) => setError(e))
    //     .finally(() => setLoading(false));
    //   return;
    // }

    // GET All Other Category Data
    const newsApi = `${newsUrlTop}?category=${category}&country=${country}&apiKey=${
      import.meta.env.VITE_NEWS_API_KEY
    }`;
    //   setLoading(true);
    //   axios.get(newsApi)
    //       .then(response => {
    //           // console.log(response.data);
    //           setNewsData(response.data)
    //       })
    //       .catch(e => setNewsError(e))
    //       .finally(() => setLoading(false))
  }, [activeTopic]);

  return (
    <div className="dashboard">
      <Menu setActiveTopic={setActiveTopic} menuItems={menuItems} />

      <div className="dashboard__content">
        <div className="dashboard__header">
          <h3 className="title">
            {" "}
            {loading
              ? "loading..."
              : menuItems[activeTopic].header ?? menuItems[activeTopic].topic}
          </h3>

          {category === CATEGORIES.HOME && (
            <Widget shape="circle" weatherData={(data ?? mockData).weather} />
          )}
        </div>

        <div className={"dashboard__grid " + (loading ? "is-loading" : "")}>
          {category !== CATEGORIES.WEATHER && (
            <>
              {(data ?? mockData).news?.articles.map((article, index) => {
                if (index <= 2)
                  return (
                    <div
                      key={"widget-" + index}
                      className={"dashboard__grid__widget-" + index}
                    >
                      <Widget shape="square" newsData={article} />
                    </div>
                  );
              })}
            </>
          )}
          {forecast && (
              <LineChart
                width={400}
                height={300}
                data={forecast.forecast.forecastday}
              >
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="day.maxtemp_c"
                  name="max C°"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="day.mintemp_c"
                  name="min C°"
                  stroke="#82ca9d"
                />
              </LineChart>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
