import { useQuery } from '@tanstack/react-query';
import useCoordinates from './Components/UseCoordinates';
import GetCityName from './Components/GetCityName';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';
import { Container, Row } from 'react-bootstrap';
import WeatherReport from './Components/WeatherReport';
import './App.css';
import { createContext, useEffect, useState } from 'react';
import SearchBar from './Components/SearchBar';

import WeatherForecast from './Components/WeatherForcast';

interface MyContextValue {
    cityName: string | undefined;
    updateCityName: (cityName: string) => void;
}

export const CityNameContext = createContext<MyContextValue | undefined>(
    undefined
);
function App() {
    const location = useCoordinates();
    console.log(location);
    const [cityName, setCityName] = useState<string>();
    const [shouldFetchData, setShouldFetchData] = useState(false);
    const { data } = useQuery({
        queryKey: ['cityName', location?.coords],
        queryFn: GetCityName,
        enabled:shouldFetchData
    });

    console.log(data);

    useEffect(() => {
        if (data) {
            setCityName(data?.address?.state_district.replace(' District', ''));
        }
        if(location){
            setShouldFetchData(true);
        }
    }, [location, data]);

    const updateCityName = (cityName: string) => {
        setCityName(cityName);
    };

    const contextValue: MyContextValue = {
        cityName: cityName,
        updateCityName: updateCityName,
    };

    // console.log(results?.data?.address?.state_district?.replace(' District', ''))
    // setCityName(results.data.address.state_district.replace(' District', ''))

    return (
        <CityNameContext.Provider value={contextValue}>
            <Container>
                <h1 className='text-center my-5'>Weather App</h1>
                <Row>
                    <SearchBar />
                </Row>
                <WeatherReport />
                <WeatherForecast /> 
            </Container>
        </CityNameContext.Provider>
    );
}

export default App;
