
import axios from 'axios'

const GetCityName = async (querykey: any ) => {
    try{
        const coords = querykey.queryKey[1];
        let response
        if(coords){
            response = await axios.get(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}`
              );
        }
    
        console.log(response?.data)
    
        return response?.data
    }catch(error){
        console.log(error)
    }
}

export default GetCityName