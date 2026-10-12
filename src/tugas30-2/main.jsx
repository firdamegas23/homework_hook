import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Contoh from './use_Effect';
import '../App.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Contoh />
    </StrictMode>
);
