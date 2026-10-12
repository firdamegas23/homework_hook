import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';

function Contoh() {
    const[message, setMessage] = useState("Mount");

    useEffect(() => {
        document.title = `Judul: ${message}`;
        console.log("Title update");
        return() => {
            console.log("Title update or unmount");
        }
    }, [message]);
    
    useEffect(() => {
        return() => {
            setMessage("Unmount");
        }
    }, []);

    const handleClick = () => {
        setMessage("Updated");
    }

    return (
        <div>
            <center>
                <h1>useEffect Hook</h1>
                <p>Tugas 30.2 (Module 31)</p>
            </center>

            <h3>Message: {message}</h3>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}

export default Contoh;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <Contoh />
// );