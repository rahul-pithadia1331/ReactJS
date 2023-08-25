import axios from "axios"


const AddItem = async( sItemName: string) => {
        try{
            const results = await axios.post(`${process.env.REACT_APP_BASE_URL}/add`, {sItemName})
            return results.data 
        }catch (error){
            console.log(error);
        }
}

export default AddItem;