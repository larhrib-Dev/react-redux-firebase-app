import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
  return (
    <BrowserRouter>
     <Fragment>
       <Navbar />
       <Switch>
         <Route exact path='/' component={Dashboard} />
         <Route exact path='/project/:id' component={ProjectDetails} />
       </Switch>
     </Fragment>
    </BrowserRouter>
  );
}

export default App;
