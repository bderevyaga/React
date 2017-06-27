import React, { Component } from 'react';
import './admin.css';

class Admin extends Component {
    render() {
        return (
        <div className="login-page-wrapper">
            <div className="login-page">
                <div className="form">
                    <form className="register-form">
                        <input type="text" placeholder="name"/>
                        <input type="password" placeholder="password"/>
                        <input type="text" placeholder="email address"/>
                        <button>create</button>
                        <p className="message">Already registered? <a >Sign In</a></p>
                    </form>
                    <form className="login-form">
                        <input type="text" placeholder="username"/>
                        <input type="password" placeholder="password"/>
                        <button>login</button>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default Admin;