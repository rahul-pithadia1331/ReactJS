import axios from 'axios';

const GetCityNameSuggestion = async (cityName: string) =>{
    try{
        if(!cityName) return;
        const results = await axios.get(`http://api.weatherapi.com/v1/search.json?key=2ff8793891534e3b82a112454232508&q=${cityName}`);

        return await results.data;

    }catch(error: any | unknown){
        console.log(error);
        throw new Error(error?.response?.data.error.message)
    }
}

export default GetCityNameSuggestion