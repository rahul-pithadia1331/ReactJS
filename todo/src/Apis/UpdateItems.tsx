import axios from "axios";

const UpdateItem = async(data: {sItemName: string, sId: string}) => {
    try{
        const results = await axios.patch(`${process.env.REACT_APP_BASE_URL}/update`, {sItemName: data.sItemName, sId:data.sId});
        console.log(results.data.message);
        return results.data
    }catch(error){
        console.log(error)
    }
}

export default UpdateItem;