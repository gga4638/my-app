import React, { useState, useEffect, useContext } from "react";
export {Hook}

function Hook() {
    return (
        <>
            <Counter initialCount={0}/>
            <Example />
        </>
    );
}

function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)} >
                Click Me
            </button>
            <button onClick={() => setCount(0)}>
                초기화
            </button>
        </div>
    );
}

function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount);
    
    return (
        <>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </>
    );
}

// function useFriendStatus(friendID) {
//     const [isOnline, setIsOnline] = useState(null);
//     useEffect(() => {
//         function handelStatusChange(status) {
//             setIsOnline(status.isOnline);
//         }
//         ChatAPI.subscribeToFriendStatus(friendID, handelStatusChange);

//         return () => {
//             ChatAPI.unsubscribeFromFriendStatus(friendID, handelStatusChange);
//         }
//     });

//     return isOnline;
// }

// function FriendStatus(props) {
//     const isOnline = useFriendStatus(props.freind.id);

//     if(isOnline === null) {
//         return 'Loading...';
//     }
//     return isOnline ? 'Online' : 'Offline';
// }

// function FriendListItem(props) {
//     const isOnline = useFriendStatus(props.freind.id);

//     return (
//         <li style={{ color: isOnline ? 'green': 'black'}}>
//             {props.friend.name}
//         </li>
//     );
// }

// const friendList = [
//     { id: 1, name: 'Phoebe' },
//     { id: 2, name: 'Rachel' },
//     { id: 3, name: 'Ross' },
// ];

// function ChatRecipientPicker() {
//     const [recipientID, setRecipientID] = useState(1);
//     const isRecipientOnline = useFriendStatus(recipientID);

//     return (
//         <>
//             <Circle color={isRecipientOnline ? 'green' : 'red'} />
//             <select 
//                 value={recipientID} 
//                 oncChange={e => setRecipientID(Number(e.target.value))}
//             >
//                 {friendList.map(friend => (
//                     <option key={friend.id} value={friend.id}>
//                         {friend.name}
//                     </option>
//                 ))}
//             </select>
//         </>
//     );
// }

function Form() {
    const [name, setName] = useState('Mary');

    useEffect(function persistform() {
        localStorage.setItem('formData', name);
    });

    const [surname, setSurname] = useState('Poppins');
    useEffect(function updateTitle() {
        document.title = name + ' ' + surname;
    });
}

function useReducer(reducer, initialState) {
    const [state, setState] = useState(initialState);

    function dispatch(action) {
        const nextState = reducer(state, action);
        setState(nextState);
    }

    return [state, dispatch];
}

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

const ThemeContext = React.createContext(themes.light);

function App() {
    return (
        <ThemeContext.Provider value={themes.dark}>
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
}

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
        <button style={{ background: theme.background, color: theme.foreground}}>
            I am styled by tyeme context!
        </button>
    );
}