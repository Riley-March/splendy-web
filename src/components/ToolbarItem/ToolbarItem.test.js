import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ToolbarItem from './ToolbarItem';

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

it("should render a toolbar item with a checkbox", () => {
    const item = {
        id: 0,
        title: 'test-item',
        is_checked: false,
        has_checkbox: true,
        active: true
    }
    const handleClick = () => {
        console.log('clicked');
    }
    act(() => {
        render(
            <ToolbarItem
                key={item.id}
                handleClick={handleClick}
                has_checkbox={item.has_checkbox}
                {...item}
            />
        , container);
    });
    const toolbar_item = container.querySelector("[data-testid='toolbar-item']");
    expect(toolbar_item.querySelector("[data-testid='check-item']")).toBeTruthy();
    expect(toolbar_item.querySelector("[data-testid='text-item']")).toBeNull();
    expect(toolbar_item.querySelector("[data-testid='check-item']").textContent).toBe('test-item');
});

it("should render a toolbar item without a checkbox", () => {
    const item = {
        id: 0,
        title: 'test-item',
        has_checkbox: false,
        active: true
    }
    const handleClick = () => {
        console.log('clicked');
    }
    act(() => {
        render(
            <ToolbarItem
                key={item.id}
                handleClick={handleClick}
                has_checkbox={item.has_checkbox}
                {...item}
            />
        , container);
    });
    const toolbar_item = container.querySelector("[data-testid='toolbar-item']");
    expect(toolbar_item.querySelector("[data-testid='check-item']")).toBeNull();
    expect(toolbar_item.querySelector("[data-testid='text-item']")).toBeTruthy();
    expect(toolbar_item.querySelector("[data-testid='text-item']").textContent).toBe('test-item');
});