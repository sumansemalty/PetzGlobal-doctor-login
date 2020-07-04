import React, { Component } from "react";
import { Link } from "react-router-dom";
import './login';

export default class ForgotPassword extends Component {
    render() {
        return (
            <form>
                <h3>Forgot Password</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" className="form-control" placeholder="Enter Phone Number" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Get OTP</button>
                <div className='forgot'>
                    <Link to="/sign-in">Back</Link>
               </div>
            </form>
            
        );
    }
}