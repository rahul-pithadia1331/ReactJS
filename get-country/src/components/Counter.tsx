import {Button, Col, Form} from 'react-bootstrap';
import useCounter from './useCounter';

const Counter = () => {

    const {decNumber, number, incNumber} = useCounter()

    console.log(decNumber)

 
    return (
        <Col>
            <Form.Group>
                <Button onClick={decNumber}>-</Button>
                <Form.Control className='w-25' type='number' value={number} readOnly></Form.Control>
                <Button onClick={incNumber}>+</Button>
            </Form.Group>
        </Col>
    )
}

export default Counter
