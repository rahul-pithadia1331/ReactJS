import axios from 'axios';

const GetWeatherDetails = async (queryKey: any) => {
    try {
        const cityName = queryKey.queryKey[1];
        if (!cityName) return;
        const results = await axios.get(
            `http://api.weatherapi.com/v1/forecast.json?key=2ff8793891534e3b82a112454232508&q=${cityName}&days=1&aqi=no&alerts=no`
        );

        console.log(results.data);

        return results?.data;
    } catch (error: any) {
        console.log(error);
        throw new Error(error.response.data.error.message);
    }
};

export default GetWeatherDetails;
