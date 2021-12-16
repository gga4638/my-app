import React, { useEffect, useReducer } from "react";

export function Hook() {
    return (
        <>
            <Counter />
        </>
    );
}

const initialState = { count: 0 };

function reducer(state, action) {
    switch(action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'init':
            return {count: 0};
        case 'random':
            return {
                count: Math.floor(Math.random() * 100)
            };
        default:
            throw new Error();
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        document.title = `Result: ${state.count}`;
    });

    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'init'})}>Reset</button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'random'})}>Random</button>
            <hr />
        </>
    );
}

//  초기화 지연

// export function Hook() {
//     return (
//         <>
//             <Counter initialCount={0}/>
//         </>
//     );
// }
// function init(initialCount) {
//     return {count: initialCount};
// }

// function reducer(state, action) {
//     switch(action.type) {
//         case 'increment':
//             return {count: state.count + 1};
//         case 'decrement':
//             return {count: state.count - 1};
//         case 'reset':
//             return init(action.payload);
//             return {count: 0};
//         default:
//             throw new Error();
//     }
// }

// function Counter({initialCount}) {
//     const [state, dispatch] = useReducer(reducer, initialCount, init);

//     useEffect(() => {
//         document.title = `Result: ${state.count}`;
//     });

//     return (
//         <>
//             Count: {state.count}
//             <button onClick={() => dispatch({type: 'reset', payload:initialCount})}>Reset</button>
//             <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//             <button onClick={() => dispatch({type: 'increment'})}>+</button>
//             <hr />
//         </>
//     );
// }