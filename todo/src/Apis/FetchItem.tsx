import axios from "axios";
import {IData}  from "../types/Types";
const fetchItemList = async () => {
    try{
        
        const result = await axios.get<IData>(`${process.env.REACT_APP_BASE_URL}/get`);

        console.log(result)
        return result.data.data
    }catch(error){
        console.log(error);
    }
}

export default fetchItemList