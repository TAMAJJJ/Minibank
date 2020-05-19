import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './accountManagement/Home';
import Transaction from './accountManagement/Transaction';
import Transfer from './accountManagement/Transfer';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Home}/>
        <Route path="/Transaction" component={Transaction}/>
        <Route path="/Transfer" component={Transfer}/>
      </div>
    </BrowserRouter>
  );
};

export default App;
