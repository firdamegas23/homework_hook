import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Total from './useState';
import '../App.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Total />
    </StrictMode>
);