import { useState } from 'react';
import { CounterProvider } from './context/CounterContext';
import Config from './components/Config';
import Counter from './components/Counter';

const App = () => {
    const [configured, setConfigured] = useState(false);

    return (
        <CounterProvider>
            <div className="flex items-center justify-center min-h-screen bg-blue-50">
                <div className="flex items-center justify-center min-h-screen bg-blue-50">
                    {!configured ? (
                        <div className="space-y-6">
                            <Config />
                            <button
                                onClick={() => setConfigured(true)}
                                className="w-full py-3 bg-green-500 text-white text-xl font-semibold rounded-lg hover:bg-green-700 transition duration-200">
                                Start Counter
                            </button>
                        </div>
                    ) : (
                        <Counter />
                    )}
                </div>
            </div>
        </CounterProvider>
    );
};

export default App;