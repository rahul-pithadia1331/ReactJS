import { Button, Form, Stack } from 'react-bootstrap';
import { FunctionComponent, useReducer } from 'react';
import ReducerCounter from '../Reducer/reducerCounter';
import { CounterActionTypes } from '../enums/enums';
  

const Counter : FunctionComponent = () => {

    const [state, dispatch] = useReducer(ReducerCounter, {count: 0});

    return (
        <>
            <h1>From counter</h1>
            <Stack direction='horizontal' gap={2} className='mx-auto'>
                <Button variant='success' onClick={() => dispatch({type: CounterActionTypes.INCREASE })}>+</Button>
                <input className='form-control' readOnly value={state.count}/>
                <Button variant='danger' onClick={() => dispatch({type: CounterActionTypes.DECREASE})}>-</Button>
            </Stack>
        </>
    );
};

export default Counter;
