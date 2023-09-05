import { useQuery } from '@tanstack/react-query';
import GetWeatherDetails from './GetWeatherDetailes';
import { Card, Stack } from 'react-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { CityNameContext } from '../App';

const WeatherReport = () => {
    const city = useContext(CityNameContext);
    const [shouldFetchData, setShouldFetchData] = useState(false);
    const weather = useQuery({
        queryKey: ['weatherdetail', city?.cityName],
        queryFn: GetWeatherDetails,
        enabled: shouldFetchData,
    });

    useEffect(()=>{
        if(city?.cityName){
            setShouldFetchData(true);
        }
    },[city?.cityName])
    // console.log(weather.error?.toString(), weather.isError);
    
    if (weather.isError) {
        return (
            <Card className='w-75 h-75 mx-auto my-auto p-5'>
                <h1 className='text-center'>
                    {weather.error?.toString().replace('Error:', '') }
                </h1>
            </Card>
        );
    }


    return weather.isLoading ? (
        <Card className='my-3 mx-auto p-5'>
            <h1 className='text-center'>Loading...</h1>
        </Card>
    ) : (
        <Card className='w-75 h-75 mx-auto'>
            <Card.Title className='my-3 mx-auto'>
                <h3>
                    {weather?.data?.location?.name},{' '}
                    {weather?.data?.location?.country}
                </h3>
            </Card.Title>
            <Card.Body>
                <Stack
                    direction='horizontal'
                    gap={2}
                    className='mx-auto justify-content-center'
                >
                    <h5>Temperature:</h5>
                    <h5>{weather?.data?.current?.temp_c}° C</h5>
                    <img
                        className='mb-2'
                        alt='temperature icon'
                        src={weather.data?.current?.condition?.icon}
                    />
                </Stack>
                <Stack direction='horizontal' gap={5} className='mx-auto'>
                    <Stack gap={3}>
                        <Stack
                            direction='horizontal'
                            gap={2}
                            className='mx-auto'
                        >
                            <h5>
                                <i className='bi bi-moisture'></i>
                            </h5>
                            <h5>Humidity:</h5>
                            <h5>{weather?.data?.current?.humidity} %</h5>
                        </Stack>
                        <Stack
                            direction='horizontal'
                            gap={2}
                            className='mx-auto'
                        >
                            <h5>
                                <i className='bi bi-sunrise'></i>{' '}
                            </h5>
                            <h5> Sunrise:</h5>
                            <h5>
                                {
                                    weather?.data?.forecast?.forecastday[0]
                                        ?.astro?.sunrise
                                }
                            </h5>
                        </Stack>
                        <Stack
                            direction='horizontal'
                            gap={2}
                            className='mx-auto'
                        >
                            <h5>
                                <i className='bi bi-sunset'></i>{' '}
                            </h5>
                            <h5> Sunset:</h5>
                            <h5>
                                {
                                    weather?.data?.forecast?.forecastday[0]
                                        ?.astro?.sunset
                                }
                            </h5>
                        </Stack>
                    </Stack>
                    <Stack gap={3}>
                        <Stack
                            direction='horizontal'
                            gap={2}
                            className='mx-auto'
                        >
                            <h5>
                                <i className='bi bi-wind'></i>{' '}
                            </h5>
                            <h5> Wind Speed:</h5>
                            <h5>{weather.data?.current?.wind_mph} m/h</h5>
                        </Stack>
                        <Stack
                            direction='horizontal'
                            gap={2}
                            className='mx-auto'
                        >
                            <h5>
                                <i className='bi bi-thermometer-sun'></i>
                            </h5>
                            <h5> Visibility:</h5>
                            <h5>{Number(weather.data?.current?.vis_km)} km</h5>
                        </Stack>
                        <Stack
                            direction='horizontal'
                            gap={2}
                            className='mx-auto'
                        >
                            <h5>
                                <i className='bi bi-cloudy'></i>
                            </h5>
                            <h5>Clouds:</h5>
                            <h5>{weather.data?.current?.cloud} %</h5>
                        </Stack>
                    </Stack>
                </Stack>
            </Card.Body>
        </Card>
    );
};
export default WeatherReport;
