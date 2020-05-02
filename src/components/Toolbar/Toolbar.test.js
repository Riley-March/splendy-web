import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Toolbar from './Toolbar';

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

it("should render a toolbar of text items", () => {
    const tickets = [
        {
            name: 'test-ticket',
            stats: [],
            active: true
        }
    ]
    const handleClick = () => {
        console.log(click);
    }
    act(() => {
        render(
            <Toolbar 
                title='Text Toolbar' 
                items={tickets}
                handleClick={handleClick}
                has_checkbox={false}
            />
        , container);
    });

    const toolbar = container.querySelector("[data-testid='toolbar']");
    expect(toolbar.querySelector("[data-testid='title']").textContent).toBe('Text Toolbar');
    const items = toolbar.querySelector("[data-testid='items']");
    expect(items.querySelector("[data-testid='text-item']")).toBeTruthy();
});

it("should render a toolbar of checkbox items", () => {
    const tickets = [
        {
            name: 'test-ticket',
            stats: [],
            active: true
        }
    ]
    const handleClick = () => {
        console.log(click);
    }
    act(() => {
        render(
            <Toolbar 
                title='Checkbox Toolbar' 
                items={tickets}
                handleClick={handleClick}
                has_checkbox={true}
            />
        , container);
    });

    const toolbar = container.querySelector("[data-testid='toolbar']");
    expect(toolbar.querySelector("[data-testid='title']").textContent).toBe('Checkbox Toolbar');
    const items = toolbar.querySelector("[data-testid='items']");
    expect(items.querySelector("[data-testid='check-item']")).toBeTruthy();
});