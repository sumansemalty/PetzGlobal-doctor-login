import React, { Component } from "react";

import { Link } from "react-router-dom";


export default class ForgotPassword3 extends Component {
    render() {
        return (
            <form>
                <h3>Forgot Password</h3>

                <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control" placeholder="Re-Enter password" />
            </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <div className='forgot'>
                    <Link to="/password-otp">Back</Link>
               </div>
               
            </form>
            
        );
    }
}