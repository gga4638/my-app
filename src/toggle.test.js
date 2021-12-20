import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Toggle from "./toggle";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test("changes value when clicked", () => {
    const onChange = jest.fn();
    act(() => {
        render(<Toggle onChange={onChange} />, container);
    });

    const button = document.querySelector("[data-testid=toggle]");
    expect(button.innerHTML).toBe("Turn on");

    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true}));
        // 리액트는 자동으로 이벤트를 루트로 위임하기 때문에 이벤트마다 {bubbles: true}를 전달해야 한다.
        // 이벤트 버블링 : 이벤트가 발생했을 때 더 상위의 화면 요소들로 전달되어 가는 특성
        // 이벤트 버블링 <-> 이벤트 캡처
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(button.innerHTML).toBe("Turn off");

    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true}));
    });

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(button.innerHTML).toBe("Turn on");

    act(() => {
        for(let i = 0; i < 5; i++) {
            button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        }
    });
    expect(onChange).toHaveBeenCalledTimes(7);
    expect(button.innerHTML).toBe("Turn off");
});