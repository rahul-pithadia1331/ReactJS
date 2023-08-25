import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

interface IFormInput {
    sFirstName: string;
    sLastName: string;
    sEmail: string;
    sPassword: string;
}

const RegistrationForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<IFormInput>();

    console.log(watch('sFirstName'));

    const onSubmit = (data: IFormInput) => {
        console.log(JSON.stringify(data));
    };
    return (
        <Card className='my-5 py-5 px-5 w-75 mx-auto'>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group as={Row} className='mb-3' controlId='sFirstName'>
                    <Form.Label column sm='2'>
                        First Name:
                    </Form.Label>
                    <Col sm='10'>
                        <Form.Control
                            type='text'
                            placeholder='First Name'
                            {...register('sFirstName', {
                                required: true,
                                maxLength: 20,
                                pattern: /^[A-Za-z]+$/i,
                            })}
                        />
                        <label htmlFor='sFirstName' className='text-danger'>
                            {errors?.sFirstName?.type === 'required'
                                ? 'This field is required'
                                : errors?.sFirstName?.type === 'maxLength'
                                ? 'First name cannot exceed 20 characters'
                                : errors?.sFirstName?.type === 'pattern'
                                ? 'Alphabetical characters only'
                                : ''}
                        </label>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className='mb-3' controlId='sLastName'>
                    <Form.Label column sm='2'>
                        Last Name:
                    </Form.Label>
                    <Col sm='10'>
                        <Form.Control
                            type='text'
                            placeholder='Last Name'
                            {...register('sLastName', {
                                required: true,
                                maxLength: 20,
                                pattern: /^[A-Za-z]+$/i,
                            })}
                        />
                        <label className='text-danger'>
                            {errors?.sLastName?.type === 'required'
                                ? 'This field is required'
                                : errors?.sLastName?.type === 'maxLength'
                                ? 'Last name cannot exceed 20 characters'
                                : errors?.sLastName?.type === 'pattern'
                                ? 'Alphabetical characters only'
                                : ''}
                        </label>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className='mb-3' controlId='sEmail'>
                    <Form.Label column sm='2'>
                        Email:
                    </Form.Label>
                    <Col sm='10'>
                        <Form.Control
                            type='email'
                            placeholder='Email'
                            {...register('sEmail', {
                                required: true,
                                maxLength: 20,
                                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                            })}
                        />
                        <label className='text-danger'>
                            {errors?.sEmail?.type === 'required'
                                ? 'This field is required'
                                : errors?.sEmail?.type === 'maxLength'
                                ? 'Em   ail cannot exceed 20 characters'
                                : errors?.sEmail?.type === 'pattern'
                                ? 'Given email is invalid'
                                : ''}
                        </label>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className='mb-3' controlId='sPassword'>
                    <Form.Label column sm='2'>
                        Password:
                    </Form.Label>
                    <Col sm='10'>
                        <Form.Control
                            type='password'
                            placeholder='Password'
                            {...register('sPassword', {
                                required: true,
                                maxLength: 20,
                            })}
                        />
                        <label className='text-danger'>
                            {errors?.sPassword?.type === 'required'
                                ? 'This field is required'
                                : errors?.sPassword?.type === 'maxLength'
                                ? 'Password cannot exceed 20 characters'
                                : ''}
                        </label>
                    </Col>
                </Form.Group>
                <Button type='submit' variant='primary' className=' mx-auto'>
                    Submit Form
                </Button>
            </Form>
        </Card>
    );
};

export default RegistrationForm;
