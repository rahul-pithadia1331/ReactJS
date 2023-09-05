/* eslint-disable no-sequences */
import { Button, Stack, Form } from 'react-bootstrap';
import { CityNameContext } from '../App';
import SearchAutoComplete from './SearchAutocomplete';
import { useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useCoordinates from './UseCoordinates';
import GetCityName from './GetCityName';

const SearchBar = () => {
    const city = useContext(CityNameContext);
    const location = useCoordinates();
    const [shouldFetchData, setShouldFetchData] = useState(false);
    const { data } = useQuery({
        queryKey: ['cityName', location?.coords],
        queryFn: GetCityName,
        enabled: shouldFetchData,
    });

    console.log(data?.address?.state_district.replace(' District', ''));
    const [searchCity, setSearchCityName] = useState<string | undefined>();
    console.log(searchCity);


    useEffect(() => {
        if (searchCity) {
            setShouldFetchData(true);
        }else{
            setShouldFetchData(false)
        }
    }, [searchCity]);


    return (
        <Form>
            <Stack
                direction='horizontal'
                className='mb-5 justify-content-center'
                gap={3}
            >
                <SearchAutoComplete
                    searchCityName={searchCity}
                    setSearchCityName={setSearchCityName}
                />

                <Button
                    variant='primary'
                    onClick={() => (
                        searchCity
                            ? city?.updateCityName(searchCity as string)
                            : city?.cityName,
                        setSearchCityName('')
                    )}
                >
                    Search
                </Button>
                <Button
                    variant='primary'
                    onClick={(e) =>
                        city?.updateCityName(
                            data?.address?.state_district.replace(
                                ' District',
                                ''
                            )
                        )
                    }
                >
                    Reset
                </Button>
            </Stack>
        </Form>
    );
};

export default SearchBar;
