import React, { Component } from "react";
import { Link } from "react-router-dom";
import './doctor_signup';
import './forgot_password';
import face from '../assets/face.png';
import google from '../assets/google.jpg';
import insta from '../assets/insta.png';
import twitter from '../assets/twitter.png';


  
export default class Login extends Component {
    render() {
        return (
            <form>
                <h2>Welcome To PetzGlobal</h2>
                <p></p>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                
                <div className='text-center pt-4'>
                    <Link to="/doctor_signup">Create New Account</Link>
                    <span className="pt-3"> | </span>
                    <Link to="/Forgot_Password">Forgot Password</Link>
                </div>  
               
                <div className='text-center pt-4'>
                <span className="pt-3"> -------------------- </span>OR
                <span className="pt-3"> -------------------- </span></div>
                <p></p>
                <div class="socials">
				<ul>
				<li><img alt="face" src={face} /></li>
				<li><img alt="google" src={google} /></li>
				<li><img alt="insta" src={insta} /></li>
                <li><img alt="twitter" src={twitter} /></li>
				</ul>
				</div>
                
                
                
                
        </form>

            
        );
    }
}
