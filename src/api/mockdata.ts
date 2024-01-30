// https://newsapi.org/v2/top-headlines?country=us&pageSize=3&apiKey=xxx
export const newsMockData = {
    "status": "ok",
    "totalResults": 34,
    "articles": [
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Bill Barnwell",
            "title": "Chargers hire Jim Harbaugh: Perfect match for both sides? - ESPN",
            "description": "Was Jim Harbaugh the ideal hire for the Chargers, and is the job in L.A. the ideal place for the coach? It's not that simple.",
            "url": "https://www.espn.com/nfl/story/_/id/39380294/chargers-hire-jim-harbaugh-nfl-coach-michigan-perfect-match-next",
            "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0125%2Fr1281996_1296x729_16%2D9.jpg",
            "publishedAt": "2024-01-25T14:25:00Z",
            "content": "If you have to hire a head coach, landing the reigning national champion seems like a good place to look. The Los Angeles Chargers got their man on Wednesday, hiring Jim Harbaugh away from Michigan t… [+18835 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Investor's Business Daily"
            },
            "author": "Investor's Business Daily",
            "title": "Tesla Dives As Analysts Slam Guidance, 'Train Wreck' Earnings Call - Investor's Business Daily",
            "description": null,
            "url": "https://www.investors.com/news/tesla-stock-dives-as-analysts-slam-opaque-guidance-train-wreck-earnings-call/",
            "urlToImage": null,
            "publishedAt": "2024-01-25T13:32:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Lily Herman",
            "title": "Boeing 737 Max 9s cleared to fly again, Jon Stewart's 'Daily Show' return and Jim Harbaugh signs on as Chargers' new head coach - Yahoo News",
            "description": "The stories you need to start your day: Boeing 737 Max 9s cleared to fly, Jon Stewart’s ‘Daily Show’ return and more in today’s edition of The Yodel...",
            "url": "https://news.yahoo.com/boeing-737-max-9s-cleared-to-fly-again-jon-stewarts-daily-show-return-and-jim-harbaugh-signs-on-as-chargers-new-head-coach-132733875.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/h11ak1nQH5kRBxmMFtSBNA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2024-01/1869ff50-bb7d-11ee-afa6-9b3958495df8",
            "publishedAt": "2024-01-25T13:27:33Z",
            "content": "Good morning, everyone. Have you watched any Dad TV this week? Heres whats behind the trend. Now, on to the news.\r\nBruce Bennett/Getty Images\r\nNEED TO KNOW\r\nBoeing 737 Max 9 planes cleared for flight… [+4436 chars]"
        }
    ]
}

export const weatherMockData = {
    "location": {
      "name": "Boston",
      "region": "Lincolnshire",
      "country": "United Kingdom",
      "lat": 53.1,
      "lon": -0.13,
      "tz_id": "Europe/London",
      "localtime_epoch": 1706613427,
      "localtime": "2024-01-30 11:17"
    },
    "current": {
      "last_updated_epoch": 1706613300,
      "last_updated": "2024-01-30 11:15",
      "temp_c": 6,
      "temp_f": 42.8,
      "is_day": 1,
      "condition": {
        "text": "Overcast",
        "icon": "//cdn.weatherapi.com/weather/64x64/day/122.png",
        "code": 1009
      },
      "wind_mph": 15,
      "wind_kph": 24.1,
      "wind_degree": 320,
      "wind_dir": "NW",
      "pressure_mb": 1026,
      "pressure_in": 30.3,
      "precip_mm": 0.01,
      "precip_in": 0,
      "humidity": 87,
      "cloud": 100,
      "feelslike_c": 2.1,
      "feelslike_f": 35.8,
      "vis_km": 10,
      "vis_miles": 6,
      "uv": 2,
      "gust_mph": 18.6,
      "gust_kph": 29.9
    }
  }