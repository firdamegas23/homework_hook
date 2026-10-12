import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CallbackView from './use_callback';
import '../App.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CallbackView />
    </StrictMode>
);