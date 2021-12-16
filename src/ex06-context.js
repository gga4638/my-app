import {React, useContext, createContext, useState} from "react";

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    },
    red: {
        foreground: "#FFCCE5",
        background: "#F21414",
    }
};

console.log(themes['red']);
const ThemeContext = createContext('dark');

export function App() {
    const [color, setColor] = useState(themes.dark);
    return (
        <ThemeContext.Provider value={color}>
            <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar() {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    const theme = useContext(ThemeContext);
    console.log("theme : " + theme.foreground)

    return (
        <button 
            style={{background: theme.background, color: theme.foreground}}
        >
            I am styled by tyeme context!
        </button>
    );
}
