import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import Input from '@mui/material/Input';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    // console.log({ name, email, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <Input type="email" name="email" onChange={onChange} value={email} />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          onChange={onChange}
          value={password}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
