import { useState } from 'react';

function Total() {
    // variabel arr type datanya array
    const [arr, setArr] = useState([1]);

    function handleClick() {
        setArr(arr + 1);
    }

    return (
        <div>
            <center>
                <h1>useState Hook</h1>
                <p>Tugas 30.1 (Module 31)</p>
            </center>

            <h3>Total Lenght Array: {arr.length}</h3>
            <button onClick={handleClick}>Tambah</button>
        </div>
    );
}

export default Total;

