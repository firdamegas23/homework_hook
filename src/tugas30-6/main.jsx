import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HitungComponent from './App';
import '../App.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HitungComponent />
    </StrictMode>
);