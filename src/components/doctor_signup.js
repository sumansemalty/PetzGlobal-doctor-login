import React, { Component } from "react";
import { Link } from "react-router-dom";
import './login';

export default class SignUp extends Component {
    render() {
        return (
            <form>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Enter Username" />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            
                
            <div className="form-group">
                <label>Phone Number</label>
                <input type="text" className="form-control" placeholder="Enter Phone Number" />
            </div>

        <div className="form-group">
            <label for="type" className="font-large">Gender</label>
            <div className="col-sm-15">
            <select class="form-control" id="gender">    
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            </div>
        </div>
        
        <div className="form-group">
                <label>Clinic Address</label>
                <textarea name="address" className="form-control" ></textarea> 
        </div>

        <div className="form-group">
                <label>City</label>
                <input type="text" className="form-control" placeholder="" />
            </div>

        
        <div className="form-group">
                <label>College Name</label>
                <input type="text" className="form-control" placeholder="Enter College Name" />
        </div>

        <div className="form-group">
                <label>Years Of Experience</label>
                <input type="number" className="form-control" placeholder="Years Of Experience" />
        </div>

        

        <div className="form-group">
                <label>Upload Picture</label>
                <input type="file" accept="image/*" className="file-input" />
        </div>
        
        <div className="form-group">
                <label>Upload Certificate</label>
                <input type="file" className="file-input" />
        </div>

        

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control" placeholder="Re-Enter password" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p >
            </p>
            <div className="forgot-password text-right">
                Already registered <Link to="/sign-in">sign in?</Link>
            </div>


        </form>
        );
    }
}