import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register({ name, email, password }));
    // console.log({ name, email, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" onChange={onChange} value={name} />
      </label>
      <label>
        Email
        <input type="email" name="email" onChange={onChange} value={email} />
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
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
