import { useState, useCallback } from 'react';

const Jumlah = (props) => {
    const sum = useCallback(() => {
        if (props.arr) {
            return props.arr.reduce((total, num) => total + num, 0);
        }
    }, [props.arr]);

    return (
        <div>
            <p>Jumlah: {sum()}</p>
        </div>
    );
}

const CallbackView = () => {
    const [count, setCount] = useState([]);
    const handleClick = () => {
        setCount((arr) => [...arr, 1]);
    }

    return (
        <>
            <center>
                <h1>useCallback Hook</h1>
                <p>Tugas 30.3 (Module 31)</p>
            </center>
            <Jumlah arr={count} />
            <div>
                <button type='button' onClick={handleClick}>Tambah</button>
            </div>
        </>
    );
}

export default CallbackView;