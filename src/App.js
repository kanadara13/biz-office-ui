import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import MainHeader from "./layout/MainHeader";
import MainSidebar from "./layout/MainSidebar"
import Material from './material/Material';
import MaterialWrite from './material/MaterialWrite';

class App extends Component {
  render() {
    return (
        <Router>
           <div className="wrapper" >
                <MainHeader/>
                <MainSidebar/>
               <div className="content-wrapper">
                   <Switch>
                       <Route exact path="/material" component={Material}/>
                       <Route exact path="/materialWrite" component={MaterialWrite}/>
                   </Switch>
               </div>
               <footer className="main-footer">
                   <div className="pull-right hidden-xs">
                       <b>Version</b> 2.4.0
                   </div>
                   <strong>Copyright &copy; 2014-2016 <Link to="https://adminlte.io" target="_blank">Almsaeed Studio</Link>.</strong> All rights
                   reserved.
               </footer>
            </div>
        </Router>
    );
  }
}

export default App;
