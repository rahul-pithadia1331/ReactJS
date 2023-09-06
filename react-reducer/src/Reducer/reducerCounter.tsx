import { ICounterAction } from '../Interfaces/interfaces';
import { ICounter } from '../Interfaces/interfaces'
import { CounterActionTypes } from '../enums/enums';


const ReducerCounter = (state: ICounter, action: ICounterAction) => {
    const { type, payload } = action;

    switch (type) {
        case CounterActionTypes.INCREASE:
            return {
                ...state,
                count: state.count + 1,
            };

        case CounterActionTypes.DECREASE:
            return {
                ...state,
                count: state.count>0? state.count - 1: state.count,
            };
        default:
            return state;
    }
};

export default ReducerCounter;
