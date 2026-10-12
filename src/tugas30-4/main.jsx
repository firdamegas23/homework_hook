import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MemoView from './use_memo';
import '../App.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <MemoView />
    </StrictMode>
);