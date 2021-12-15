import {React, useContext} from "react";

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

const ThemeContext = React.createContext('red');

export function App() {
    //return <Toolbar theme={themes.dark} />;
    return (
        <ThemeContext.Provider value="dark">
            <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );

    return (
        <div>
            <ThemedButton theme={props.theme} />
        </div>
    );
}

function ThemedButton(props) {
    const theme = useContext(ThemeContext);

    return (
        <button style={{background: theme.background, color: theme.foreground}}>
            I am styled by tyeme context!
        </button>
    );
}
