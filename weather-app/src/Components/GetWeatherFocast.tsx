import axios from 'axios';

const GetWeatherForecast = async (queryKey: { queryKey: [string, string | undefined ]}) => {
    const cityName = queryKey.queryKey[1];
    if(!cityName) return;
    const results = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=2ff8793891534e3b82a112454232508&q=${cityName}&days=7&aqi=no&alerts=no`
    );
    return results?.data;
};

export default GetWeatherForecast;
