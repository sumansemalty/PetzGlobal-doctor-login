import React, * as react from "react";
import { Link } from "react-router-dom";

import './signup';


export default class ForgotPassword_OTP extends react.Component {
    render() {
        return (
            <form>
                <h3>Forgot Password</h3>

                <div className="form-group">
                    <label>Enter OTP</label>
                    <input type="Text" className="form-control" placeholder="Enter email" />
                </div>     
                <button type="submit" className="btn btn-primary btn-block">Next</button> 
                <div className='forgot'>
                    <Link to="/forgot_password">Back</Link>
               </div> 
            </form>
            
        );
    }
}
