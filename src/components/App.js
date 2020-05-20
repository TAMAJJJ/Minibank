import React from 'react';
import Login from './Login';

import { BrowserRouter, Route} from 'react-router-dom';
import AccountHome from './accountManagement/AccountHome';
import BankHome from './bankManagement/BankHome';

const App = () => {
  return (
    <div className = "ui container grid" style = {{margin:"2%", fontSize:"20px"}}>
       <BrowserRouter>

           <Route path="/" exact component={Login}/>
           <Route path="/AccountHome" component={AccountHome}/>
           <Route path="/BankHome" component={BankHome}/>

       </BrowserRouter>
    </div>
  );
};

export default App;
