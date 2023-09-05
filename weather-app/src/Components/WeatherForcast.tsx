import { useQuery } from '@tanstack/react-query';
import { CityNameContext } from '../App';
import { useContext, useEffect, useState } from 'react';
import { Card, Stack } from 'react-bootstrap';
import GetWeatherForecast from './GetWeatherFocast';

const WeatherForecast: JSX.Element| string | any = () => {
    const cityName = useContext(CityNameContext);
    const [shouldFetchData, setShouldFetchData] = useState(false);
    const response = useQuery({
        queryKey: ['weatherforecast', cityName?.cityName],
        queryFn: GetWeatherForecast,
        enabled:shouldFetchData
    });

    useEffect(()=>{
        if(cityName?.cityName){
            setShouldFetchData(true);
        }
    },[cityName?.cityName])


    const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    console.log(response.data);
    return response.isLoading? '': response.isError ? (
        ''
    ) : (
        <Card className='mt-5 p-4 '>
            <Stack direction='horizontal' gap={5}>
                {response.data?.forecast?.forecastday?.map(
                    (data: any, index: number) => (
                        <Stack key={index} gap={3}>
                            <h5 className='text-center'>
                                {index === 0
                                    ? 'Today'
                                    : index === 1
                                    ? 'Yesterday'
                                    : weekday[
                                          new Date(
                                              data.date_epoch * 1000
                                          ).getDay()
                                      ]}
                            </h5>
                            <h6 className='text-center'>
                                <img
                                    alt='weather Icon'
                                    src={data.day.condition.icon}
                                />
                            </h6>
                            <h6 className='text-center'>
                                {data.day.avgtemp_c}°
                            </h6>
                        </Stack>
                    )
                )}
            </Stack>
        </Card>
    );
};

export default WeatherForecast;
