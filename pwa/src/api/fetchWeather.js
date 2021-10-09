import axios from 'axios';

const URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = '3d52eca167f662a8bf5625546186a4f2';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            uniys: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}