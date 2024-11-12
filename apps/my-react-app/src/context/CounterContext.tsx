import React, { createContext, useReducer, ReactNode } from 'react';

interface CounterState {
    count: number;
    minValue: number;
    maxValue: number;
}

interface CounterContextProps {
    state: CounterState;
    dispatch: React.Dispatch<CounterAction>;
}

type CounterAction =
    | { type: 'INCREMENT' }
    | { type: 'DECREMENT' }
    | { type: 'SET_VALUES'; payload: { minValue: number; maxValue: number; defaultValue: number } };

const initialState: CounterState = {
    count: 0,
    minValue: 0,
    maxValue: 10,
};

const CounterContext = createContext<CounterContextProps | undefined>(undefined);

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
    switch (action.type) {
        case 'INCREMENT':
            if (state.count < state.maxValue) {
                return { ...state, count: state.count + 1 };
            }
            return state;

        case 'DECREMENT':
            if (state.count > state.minValue) {
                return { ...state, count: state.count - 1 };
            }
            return state;

        case 'SET_VALUES':
            return {
                ...state,
                minValue: action.payload.minValue,
                maxValue: action.payload.maxValue,
                count: action.payload.defaultValue,
            };

        default:
            return state;
    }
};

const CounterProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    );
};

export { CounterContext, CounterProvider };