import React from 'react';

import './App.css';

import TicketPage from './pages/TicketPage/TicketPage'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Navbar nav_title="Splendy" />
        <TicketPage />
      </React.Fragment>
    </div>
  );
}

export default App;
