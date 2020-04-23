import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import TicketPage from './pages/TicketPage/TicketPage'
import StatsPage from './pages/StatsPage/StatsPage'
import AboutPage from './pages/AboutPage/AboutPage'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar nav_title="Splendy" />
      <Route exact path="/" component={TicketPage} />
      <Route exact path="/stats" component={StatsPage} />
      <Route exact path="/about" component={AboutPage} />
    </BrowserRouter>
  );
}

export default App;
