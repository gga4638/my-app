import React from "react";
import { ReactDOM } from "react";
import { act } from 'react-dom/test-utils';
import { Counter } from "./ex05-hook";

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.remove.removeChild(container);
    container = null;
});

it('can render and update a counter', () => {
    // 첫 번째 렌더링 및 effect 테스트
    act(() => {
        ReactDOM.render(<Counter />, container);
    });
    const button = container.querySelector('button');
    const label = container.querySelector('p');
    expect(label.textContent).toBe('You clicked 0 times');
    expect(document.title).toBe('You clicked 0 times')

    // 두 번째 렌더링 및 effect 테스트
    act(() => {
        button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });
    expect(label.textContent).toBe('You clicked 1 times')
    expect(document.title).toBe('You clicked 1 times')
})

