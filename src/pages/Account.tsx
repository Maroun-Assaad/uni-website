import React, { useState } from 'react';
import './Account.css';

const Account: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', loginData);
    alert('Login successful!');
    setLoginData({ email: '', password: '' });
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Register submitted:', registerData);
    alert('Registration successful!');
    setRegisterData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="container">
      <section className="account">
        <div className="account__content">
          <div className="account__container">
            <div className="account__tabs">
              <button
                className={`tab login ${activeTab === 'login' ? 'active' : ''}`}
                onClick={() => setActiveTab('login')}
              >
                Login
              </button>
              <button
                className={`tab register ${activeTab === 'register' ? 'active' : ''}`}
                onClick={() => setActiveTab('register')}
              >
                Register
              </button>
            </div>

            <div className="account__forms">
              {/* Login Form */}
              <form
                className={`login__form ${activeTab === 'login' ? 'active' : ''}`}
                onSubmit={handleLoginSubmit}
              >
                <h2>Welcome Back</h2>
                <p>Please login to your account</p>
                
                <div className="form__group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    required
                  />
                </div>
                
                <div className="form__group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    required
                  />
                </div>
                
                <div className="form__options">
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>
                  <a href="#" className="forgot-password">Forgot Password?</a>
                </div>
                
                <button type="submit" className="btn login__btn">
                  Login
                </button>
              </form>

              {/* Register Form */}
              <form
                className={`register__form ${activeTab === 'register' ? 'active' : ''}`}
                onSubmit={handleRegisterSubmit}
              >
                <h2>Create Account</h2>
                <p>Join us and start learning today</p>
                
                <div className="form__group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={registerData.name}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
                
                <div className="form__group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={registerData.email}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
                
                <div className="form__group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={registerData.password}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
                
                <div className="form__group">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={registerData.confirmPassword}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
                
                <div className="form__options">
                  <label>
                    <input type="checkbox" required /> I agree to the Terms & Conditions
                  </label>
                </div>
                
                <button type="submit" className="btn register__btn">
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;
