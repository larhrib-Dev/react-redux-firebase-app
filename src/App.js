import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <BrowserRouter>
     <Fragment>
       <Navbar />
       <Switch>
         <Route path='/' component={Dashboard} />
       </Switch>
     </Fragment>
    </BrowserRouter>
  );
}

export default App;
