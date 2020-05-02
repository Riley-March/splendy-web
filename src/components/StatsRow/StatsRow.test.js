import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import StatsRow from './StatsRow';

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

it("should render a row of cards", () => {
    const stats = [
        {
            type: 'test-stat-1',
            quantity: 1
        }
    ];

    act(() => {
        render(<StatsRow stats={stats}/>, container);
    });
    const card = container.querySelector("[data-testid='card']");
    expect(card.querySelector("[data-testid='title']").textContent).toBe('test-stat-1');
    expect(card.querySelector("[data-testid='quantity']").textContent).toBe('1');
});