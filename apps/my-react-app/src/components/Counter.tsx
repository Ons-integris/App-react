import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const Counter = () => {
    const context = useContext(CounterContext);

    if (!context) {
        throw new Error('Counter must be used within a CounterProvider');
    }

    const { state, dispatch } = context;

    return (
        <div className="flex items-center justify-center bg-blue-50 border-4 border-red-500">
            <div className="text-center">
                <h2 className="text-3xl font-bold">Counter: {state.count}</h2>
            </div>
            <div className="flex justify-between space-x-4">
                <button
                    onClick={() => dispatch({ type: 'INCREMENT' })}
                    className="py-2 px-4 bg-green-500 text-white text-xl font-semibold rounded-lg hover:bg-green-700 transition duration-200"
                >
                    +
                </button>
                <button
                    onClick={() => dispatch({ type: 'DECREMENT' })}
                    className="py-2 px-4 bg-red-500 text-white text-xl font-semibold rounded-lg hover:bg-red-700 transition duration-200"
                >
                    -
                </button>
            </div>
        </div>
    );
};

export default Counter;