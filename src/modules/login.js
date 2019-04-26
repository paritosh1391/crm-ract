import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

class Login extends React.Component {
    render() {
        return (
            <div className="login-wrap">
                <form>
                    <header className="form-header">
                    <span>User</span>
                    </header>
                    <div className="form-group-wrap">
                    <div className="login-group mandatory-field">
                        <input type="text" id="name" name="name" className="type-text mandatory-input" required ngModel />
                    </div>
                    <div className="login-group mandatory-field">
                        <input type="text" className="type-text mandatory-input" name="password" required ngModel />
                    </div>
                    <div className="login-group">
                        <input type="submit" value="Sign In" id="loginid" className="login-btn" disabled="disabled" />
                        <a href="#" className="forgot">forgot password?</a>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;