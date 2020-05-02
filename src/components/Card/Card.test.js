import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Card from './Card';

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

it("should render a card", () => {
    act(() => {
        render(
            <Card 
                title="title"
                sub_title="sub-title"
                quantity={1}
                color={'blue'}
            />, container);
    });
    expect(container.querySelector("[data-testid='title']").textContent).toBe('title');
    expect(container.querySelector("[data-testid='sub-title']").textContent).toBe('sub-title');
    expect(container.querySelector("[data-testid='quantity']").textContent).toBe('1');
    expect(container.querySelector("[data-testid='card']")).toHaveStyle('background-color: var(--blue-color)');
});