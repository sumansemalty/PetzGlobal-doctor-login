import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login";

import ForgotPassword from './components/forgot_password';
import ForgotPassword_OTP from './components/forgot_password_otp';
import ForgotPassword3 from './components/forgot_password3';



function App() {
  return (<Router>
      <div className="App">
      

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
         
            <Route path="/forgot_password" component={ForgotPassword}/>
            <Route path="/password-otp" component={ForgotPassword_OTP}/>
            <Route path="/password" component={ForgotPassword3}/>
           
            
          </Switch>
        </div>
      </div>
      
    </div></Router>
  );
}

export default App;
