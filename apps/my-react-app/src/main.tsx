import './App.css'
import App from './App.tsx'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterProvider } from './context/CounterContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <CounterProvider>
            <App />
        </CounterProvider>
    </React.StrictMode>
);