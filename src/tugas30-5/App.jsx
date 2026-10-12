import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
    darkMode: false,
    setDarkMode: () => {}
});

const Theme = () => {
    const {darkMode, setDarkMode} = useContext(ThemeContext);
    const handleClick = () => {
        setDarkMode(!darkMode);
    }

    return (
        <>
            <button type="button" onClick={handleClick}>
                {darkMode ? "Dark" : "Light"}
            </button>
        </>
    );
}

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const nilai = { darkMode, setDarkMode }
    return (
        <>
            <center>
                <h1>useContext Hook</h1>
                <p>Tugas 30.5 (Module 31)</p>
            </center>

            <ThemeContext.Provider value={nilai}>
                <Theme />
            </ThemeContext.Provider>
        </>
    );
}

export default App;