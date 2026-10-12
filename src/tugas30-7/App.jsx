import { useState } from 'react';

// Custom Hook
const useValue = (val) => {
    const [value, setValue] = useState(val);
    return[
        value, { setValue }
    ];
}

const Auth = () => {
    const [value, { setValue }] = useValue(false);

    return (
        <>
            <center>
                <h1>Custom Hook (useValue)</h1>
                <p>Tugas 30.9 (Module 31)</p>
            </center>

            <button onClick={() => setValue(!value)}>
                {value ? 'Logout' : 'Login'}
            </button>
        </>
    );
}

export default Auth;

