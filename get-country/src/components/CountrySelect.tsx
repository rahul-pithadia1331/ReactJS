import { Card, Col, Row, Stack, Form } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import fetchCountry from '../Apis/FetchCountry';
import fetchState from '../Apis/FetchState';

const CountrySelect = (): any => {
    const countries: any = useQuery(['countries'], fetchCountry);
    const [countryName, setCountryName] = useState<string>('');
    const states: any = useQuery({
        queryKey: ['states', countryName ? countryName : 'No Country Selected'],
        queryFn: fetchState,
    });

    console.log(countryName);

    console.log(states.data);
    if (countries.data?.length === 0) return;

    return (
        <>
            <h1 className='text-center mt-4'>Country Details</h1>
            <hr />
            <Row style={{ minHeight: '80vh' }}>
                <Col className='my-auto'>
                    <Card className='w-50 mx-auto'>
                        <Stack gap={2} className='my-5 mx-auto'>
                            <Form.Label>Country</Form.Label>

                            <Form.Select
                                onChange={(e) => {
                                    setCountryName(e.target.value);
                                }}

                                // onBlur={(e)=> {
                                //     setCountryName(e.target.value);
                                // }}
                            >
                                <option value='Select Country'>
                                    Select Country Name
                                </option>
                                {countries.data?.map(
                                    (country: any, index: number) => (
                                        <option
                                            key={index}
                                            
                                            value={country.country_name}
                                        >
                                            {country.country_name}
                                        </option>
                                    )
                                )}
                            </Form.Select>

                            <Form.Label>State</Form.Label>
                                       
                            <Form.Select>
                                <option value=''>Select State Name</option>
                                {states.data?.map((state:{state_name: string}, index:number) => <option value={state.state_name}>{state.state_name}</option>)}
                            </Form.Select>
                        </Stack>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default CountrySelect;
