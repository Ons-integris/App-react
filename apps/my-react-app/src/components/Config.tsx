
import { useState, useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const Config = () => {
    const context = useContext(CounterContext);

    if (!context) {
        throw new Error('Config must be used within a CounterProvider');
    }

    const { dispatch } = context;
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(10);
    const [defaultValue, setDefaultValue] = useState(0);

    const handleSubmit = () => {
        dispatch({
            type: 'SET_VALUES',
            payload: { minValue, maxValue, defaultValue },
        });
    };

    return (
        <div className="space-y-4">
            <div>
                <label className="block text-lg">Min Value</label>
                <input
                    type="number"
                    value={minValue}
                    onChange={(e) => setMinValue(Number(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div>
                <label className="block text-lg">Max Value</label>
                <input
                    type="number"
                    value={maxValue}
                    onChange={(e) => setMaxValue(Number(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <div>
                <label className="block text-lg">Default Value</label>
                <input
                    type="number"
                    value={defaultValue}
                    onChange={(e) => setDefaultValue(Number(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <button
                onClick={handleSubmit}
                className="w-full py-3 bg-blue-500 text-white text-xl font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
            >
                Set Values
            </button>
        </div>
    );
};

export default Config;
