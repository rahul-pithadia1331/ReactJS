/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState, useEffect } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

interface IFormInputType {
    sFirstName: string;
    sLastName: string;
    sPassword: string;
    sEmail: string;
}

const RegistrationForm = () => {
    const [formInputValues, setFormInputValues] = useState<
        IFormInputType | any
    >({
        sFirstName: '',
        sLastName: '',
        sEmail: '',
        sPassword: '',
    });

    const [validationMessage, setValidationMessage] = useState<
        IFormInputType | any
    >({
        sFirstName: '',
        sLastName: '',
        sEmail: '',
        sPassword: '',
    });

    const [invalidInputMessage, setInputMessage] = useState<
        IFormInputType | any
    >({
        sFirstName: '',
        sLastName: '',
        sEmail: '',
        sPassword: '',
    });

    const [validateFields, setValidateFields] = useState<
        | {
              sFirstName: boolean;
              sLastName: boolean;
              sEmail: boolean;
              sPassword: boolean;
          }
        | any
    >({
        sFirstName: false,
        sLastName: false,
        sEmail: false,
        sPassword: false,
    });

    const [buttonState, setButtonState] = useState<boolean>(true);

    useEffect(() => {
        if (
            validateFields.sFirstName &&
            validateFields.sLastName &&
            validateFields.sEmail &&
            validateFields.sPassword
        ) {
            console.log(validateFields);
            setButtonState(false);
        }
    }, [validateFields]);

    const handleFieldInputs = (event: any) => {
        console.log(event.target.placeholder);
       
        if (validationMessage[event.target.name]) {
            console.log('ftyhhgffghh');
            setValidationMessage({
                ...validationMessage,
                [event.target.name]: '',
            });
            validateFields[event.target.name] &&
                setValidateFields({
                    ...validateFields,
                    [event.target.name]: false,
                });
        }
        console.log(/^[a-zA-Z]*$/.test(formInputValues.sFirstName));

        if (
            event.target.name === 'sFirstName' ||
            event.target.name === 'sLastName'
        ) {
            if (event.target.value) {
                !/^[a-zA-Z]*$/.test(event.target.value)
                    ? (setInputMessage({
                          ...invalidInputMessage,
                          [event.target
                              .name]: `${event.target.placeholder} is invalid`,
                      }),
                      !buttonState && setButtonState(true),
                      validateFields[event.target.name] &&
                          setValidateFields({
                              ...validateFields,
                              [event.target.name]: false,
                          }))
                    : (setInputMessage({
                          ...invalidInputMessage,
                          [event.target.name]: '',
                      }),
                      !validateFields[event.target.name] &&
                          setValidateFields({
                              ...validateFields,
                              [event.target.name]: true,
                          }));
            }
        }



        if (event.target.name === 'sEmail') {
            if (event.target.value) {
                !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(
                    event.target.value
                )
                    ? (setInputMessage({
                          ...invalidInputMessage,
                          [event.target
                              .name]: `${event.target.placeholder} is invalid`,
                      }),
                      !buttonState && setButtonState(true),
                      validateFields[event.target.name] &&
                          setValidateFields({
                              ...validateFields,
                              [event.target.name]: false,
                          }))
                    : (setInputMessage({
                          ...invalidInputMessage,
                          [event.target.name]: '',
                      }),
                      !validateFields[event.target.name] &&
                          setValidateFields({
                              ...validateFields,
                              [event.target.name]: true,
                          }));
            }
        }

        setFormInputValues({
            ...formInputValues,
            [event.target.name]: event.target.value,
        });
    };

    const handleInputValidation = (event: any) => {
        console.log(validationMessage[event.target.name]);

        if (!formInputValues[event.target.name]) {
            console.log('empty error', validationMessage);

            setValidationMessage({
                ...validationMessage,
                [event.target
                    .name]: `${event.target.placeholder} is required field`,
            });
            !buttonState && setButtonState(true);
            validateFields[event.target.name] &&
                setValidateFields({
                    ...validateFields,
                    [event.target.name]: false,
                });
        } else {
            setValidationMessage({
                ...validationMessage,
                [event.target.name]: '',
            });
            !validateFields[event.target.name] &&
                setValidateFields({
                    ...validateFields,
                    [event.target.name]: true,
                });
        }

       

        
    };

    return (
        <Card className='my-5 py-5 px-5'>
            <Form>
                <Form.Group as={Row} className='mb-3' controlId='sFirstName'>
                    <Form.Label column sm='2'>
                        First Name:
                    </Form.Label>
                    <Col sm='10'>
                        <Form.Control
                            name='sFirstName'
                            type='text'
                            value={formInputValues.sFirstName}
                            onChange={(e) => handleFieldInputs(e)}
                            onBlur={(e) => {
                                handleInputValidation(e);
                            }}
                            placeholder='First Name'
                        />
                        <label htmlFor='sFirstName' className='text-danger'>
                            {validationMessage.sFirstName
                                ? validationMessage.sFirstName
                                : invalidInputMessage.sFirstName}
                        </label>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className='mb-3' controlId='sLastName'>
                    <Form.Label column sm='2'>
                        Last Name
                    </Form.Label>
                    <Col sm='10'>
                        <Form.Control
                            name='sLastName'
                            type='text'
                            value={formInputValues.sLastName}
                            onChange={(e) => handleFieldInputs(e)}
                            onBlur={(e) => {
                                handleInputValidation(e);
                            }}
                            placeholder='Last Name'
                        />
                        <label className='text-danger'>
                            {validationMessage.sLastName
                                ? validationMessage.sLastName
                                : invalidInputMessage.sLastName}
                        </label>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className='mb-3' controlId='sEmail'>
                    <Form.Label column sm='2'>
                        Email
                    </Form.Label>
                    <Col sm='10'>
                        <Form.Control
                            name='sEmail'
                            value={formInputValues.sEmail}
                            onChange={(e) => handleFieldInputs(e)}
                            onBlur={(e) => {
                                handleInputValidation(e);
                            }}
                            type='email'
                            placeholder='Email'
                        />
                        <label className='text-danger'>
                            {validationMessage.sEmail
                                ? validationMessage.sEmail
                                : invalidInputMessage.sEmail}
                        </label>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className='mb-3' controlId='sPassword'>
                    <Form.Label column sm='2'>
                        Password
                    </Form.Label>
                    <Col sm='10'>
                        <Form.Control
                            name='sPassword'
                            value={formInputValues.sPassword}
                            onChange={(e) => handleFieldInputs(e)}
                            onBlur={(e) => {
                                handleInputValidation(e);
                            }}
                            type='password'
                            placeholder='Password'
                        />
                        <label className='text-danger'>
                            {validationMessage.sPassword
                                ? validationMessage.sPassword
                                : invalidInputMessage.sPassword}
                        </label>
                    </Col>
                </Form.Group>
            </Form>
            <Button
                disabled={buttonState}
                variant='primary'
                className=' mx-auto'
            >
                Submit Form
            </Button>
        </Card>
    );
};

export default RegistrationForm;
