
import {CounterActionTypes} from '../enums/enums'

export interface ICounterAction {
    type: CounterActionTypes;
    payload?: number;
}

export interface ICounter {
    count: number;
}