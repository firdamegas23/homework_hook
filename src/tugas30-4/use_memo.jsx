import { useState, useMemo } from 'react';

const Jumlah = (props) => {
    const sum = useMemo(() => {
        if (props.arr) {
            return props.arr.reduce((total, num) => total + num, 0);
        }
    }, [props.arr]);

    return (
        <div>
            <p>Jumlah: {sum}</p>
        </div>
    );
}

const MemoView = () => {
    const [count, setCount] = useState([]);
    const handleClick = () => {
        setCount((arr) => [...arr, 1]);
    }

    return (
        <>
            <center>
                <h1>useMemo Hook</h1>
                <p>Tugas 30.4 (Module 31)</p>
            </center>
            <Jumlah arr={count} />
            <div>
                <button type='button' onClick={handleClick}>Tambah</button>
            </div>
        </>
    );
}

export default MemoView;