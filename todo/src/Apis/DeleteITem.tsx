import axios from "axios";

const DeleteItem = async( sId: string) => {
    try{
        const results = await axios.delete(`${process.env.REACT_APP_BASE_URL}/delete`, {data:{sId}});
        console.log(results.data.message);
        return results.data
    }catch(error){
        console.log(error)
    }
}

export default DeleteItem;
