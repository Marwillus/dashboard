//news api: https://newsapi.org/docs/endpoints/everything

export const newsUrlAll = 'https://newsapi.org/v2/everything'
export const newsUrlTop = 'https://newsapi.org/v2/top-headlines'


// weather api: https://open-meteo.com/en/docs/

// we need place and time for a forecast,
// a query would look like e.g. "?latitude=52.52&longitude=13.41&hourly=temperature_2m&timezone=GMT"
export const weatherApi = 'https://api.open-meteo.com/v1/forecast'