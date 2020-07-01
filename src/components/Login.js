import React from 'react'
import { connect } from 'react-redux';

const Login = (props) => {
    return (
        <div className="login-wrapper">
            <div className="login-background">
                <div className="login-form-wrapper">
                    <form className="login-form" action="/login" method="post">
                        <label className="login-form-header">Welcome! Please login:</label>
                        <input type="text" name="phoneNumber" placeholder="phone number" className="login-phone-number"></input>
                        <input type="text" name="name" placeholder="name" className="login-name"></input>
                        <input type="text" name="email" placeholder="email" className="login-input-email"></input>
                        <input type="text" name="password" placeholder="password" className="login-password"></input>
                        <button className="login-form-submit-button">login</button>
                        <div className="signup-wrapper">
                            <button type="button" onClick={(e) => {
                                e.preventDefault()
                                const form = document.querySelector("form")
                                form.action="/signup"
                                form.submit()
                            }} className="input-signup-button">signUp</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(Login);
