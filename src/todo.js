import React, { useState } from "react";

export default function TodoApp() {
    const [items, setItems] = useState([]);
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.length === 0) {
            return;
        }
        const newItem = {
            text: text,
            id: Date.now()
        };
        setItems(items.concat(newItem));
        setText('');
    }

    return (
        <div>
            <h3>TODO</h3>
            <TodoList items={items} />
            <form onSubmit={handleSubmit}>
                <label htmlFor="new-todo">
                    What needs to be done?
                </label>
                <br />
                <input 
                    id="new-todo"
                    onChange={handleChange}
                    value={text}
                />
                <button>
                    Add #{items.length + 1}
                </button>
            </form>
        </div>
    );
}

function TodoList(props) {
    return (
        <ul>
            {props.items.map(item => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    );
}