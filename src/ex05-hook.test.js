import React from "react";
import ReactDOM from "react-dom";
import { act } from 'react-dom/test-utils';
import { unmountComponentAtNode } from "react-dom";
import { Example } from "./ex05-hook";

let container = null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('can render and update a counter', () => {
    // 첫 번째 렌더링 및 effect 테스트
    act(() => {
        ReactDOM.render(<Example />, container);
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

