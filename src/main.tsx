import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
        <Toaster
            richColors
            toastOptions={{
                style: {
                    fontSize: '20px',
                    boxShadow: '2px 2px 20px rgba(0, 0, 0, 0.6)',
                },
            }}
        />
    </React.StrictMode>,
);
