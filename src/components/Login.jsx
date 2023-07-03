import React, { useState } from 'react';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="login">
      <h1 className="h1">Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">
          <h4 className="h4">Email</h4>
        </label>
        <input
        className="input"
          value={email}
          type="email"
          id="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">
          <h4 className="h4">Password</h4>
        </label>
        <input
        className="input"
          value={password}
          type="password"
          id="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div>
          <button type="submit">Login</button>
        </div>

        <h6 onClick={()=> props.onFormSwitch('Register')}>Don't have an account? Register</h6>
      </form>
    </div>
  );
};

export default Login;
 


