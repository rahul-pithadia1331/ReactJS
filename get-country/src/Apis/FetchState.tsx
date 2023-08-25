import axios from 'axios';

const fetchState = async (queryKey: any) => {
    try {
        console.log(queryKey.queryKey[1])
        if(!queryKey.queryKey[1] || queryKey.queryKey[1] === 'No Country Selected') return [];
        const countryName  = queryKey.queryKey[1]
        console.log(queryKey.queryKey[1]);
        let results = await axios.get(
            `https://www.universal-tutorial.com/api/states/${countryName}`,
            {
                headers: {
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJyYWh1bC5waXRoYWRpYUB5dWRpei5jb20iLCJhcGlfdG9rZW4iOiJJZFRlZkVvdU82YUI1QjRGSHB5dnYwd0FUZ1cyRTEweDJ5VThCa1J6Zm0ydVo5TDFVMllqanhwNWRVZl9neWc0ZHhvIn0sImV4cCI6MTY5Mjc5MTAyNn0.NitYl5jnMOaDJQz_C1Ne3bJP7g1rudlOQfr_8EmEoys',
                    Accept: 'application/json',
                },
            }
        );
        console.log(results.data)
        return results.data;
    } catch (error) {
        console.log(error);
    }
};

export default fetchState;
