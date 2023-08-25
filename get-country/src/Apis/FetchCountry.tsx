import axios from 'axios';
const fetchCountry = async () => {
    try {
        const result = await axios.get(
            'https://www.universal-tutorial.com/api/countries/',
            {
                headers: {
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJyYWh1bC5waXRoYWRpYUB5dWRpei5jb20iLCJhcGlfdG9rZW4iOiJJZFRlZkVvdU82YUI1QjRGSHB5dnYwd0FUZ1cyRTEweDJ5VThCa1J6Zm0ydVo5TDFVMllqanhwNWRVZl9neWc0ZHhvIn0sImV4cCI6MTY5Mjc5MTAyNn0.NitYl5jnMOaDJQz_C1Ne3bJP7g1rudlOQfr_8EmEoys',
                    Accept: 'application/json',
                },
            }
        );
        console.log(result);

        return result.data;
    } catch (error) {
        console.log(error);
    }
};

export default fetchCountry;
