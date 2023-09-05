import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

interface IFormInput {
    sFirstName: string;
    sLastName: string;
    sEmail: string;
    sPassword: string;
    sConfirmPassword: string;
}

const RegistrationForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<IFormInput>();

    const onSubmit = (data: IFormInput) => {
        console.log(data);
    };

    return (
        <Row className='h-100' style={{ minHeight: '100vh' }}>
            <Col className='my-auto'>
                <Card className='w-50 mx-auto px-5 py-5'>
                    <Card.Body>
                        <Card.Title className='text-center'>Sign Up</Card.Title>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className='mb-3' controlId='firstName'>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='First Name'
                                    {...register('sFirstName', {
                                        required: true,
                                        maxLength: 20,
                                        pattern: /^[A-Za-z]+$/i,
                                    })}
                                />
                                <span className='text-danger'>
                                    {errors.sFirstName?.type === 'required'
                                        ? 'This is required field'
                                        : errors.sFirstName?.type ===
                                          'maxLength'
                                        ? 'First name cannot exceed 20 characters'
                                        : errors.sFirstName?.type === 'pattern'
                                        ? 'Alphabetical characters only'
                                        : ''}
                                </span>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='lastName'>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Last Name'
                                />
                                <span className='text-danger'></span>
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='email'>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter email'
                                />
                                <span className='text-danger'></span>
                            </Form.Group>

                            <Form.Group className='mb-3' controlId='password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Password'
                                />
                                <span className='text-danger'></span>
                            </Form.Group>
                            <Form.Group
                                className='mb-3'
                                controlId='formBasicCheckbox'
                            >
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Confirm Password'
                                />
                                <span className='text-danger'></span>
                            </Form.Group>
                            <Button variant='primary' type='submit'>
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default RegistrationForm;
