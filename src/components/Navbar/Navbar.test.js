import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './Navbar';

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

it("should render a navbar", () => {
    //Renders the navbar with some mocked pages to test the react router
    act(() => {
        render(
            <BrowserRouter>
                <Navbar nav_title="Splendy"/>
                <Route exact path="/">
                    <h1 data-testid="heading">Tickets</h1>
                </Route>
                <Route exact path="/stats">
                    <h1 data-testid="heading">Stats</h1>
                </Route>
                <Route exact path="/about">
                    <h1 data-testid="heading">About</h1>
                </Route>
            </BrowserRouter>
        , container);
    });
    
    //Test if the title is rendered correctly
    expect(container.querySelector("[data-testid='navbar-title']").textContent).toBe('Splendy');
    
    //Clicks a navlink and tests if the correct page it rendered
    act(() => {
        const navlink = container.querySelector("[data-testid='tickets-link']");
        navlink.dispatchEvent(new MouseEvent("click", {bubbles: true}));
    });
    expect(container.querySelector("[data-testid='heading']").textContent).toBe('Tickets');

    act(() => {
        const navlink = container.querySelector("[data-testid='stats-link']");
        navlink.dispatchEvent(new MouseEvent("click", {bubbles: true}));
    });
    expect(container.querySelector("[data-testid='heading']").textContent).toBe('Stats');

    act(() => {
        const navlink = container.querySelector("[data-testid='about-link']");
        navlink.dispatchEvent(new MouseEvent("click", {bubbles: true}));
    });
    expect(container.querySelector("[data-testid='heading']").textContent).toBe('About');
});

