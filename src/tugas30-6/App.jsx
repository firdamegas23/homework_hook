import React, { useReducer } from "react";

const initialState = {count: 0 }

function reducer(state, action) {
    return { count: state.count + 1}
}

function HitungComponent() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <center>
                <h1>useReducer Hook</h1>
                <p>Tugas 30.6 (Module 31)</p>
            </center>

            <p>Hitung: {state.count}</p>
            <button onClick={() => dispatch()}>Tambah</button>
        </div>
    );
}

export default HitungComponent;