import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Link to="/AccountHome"> User </Link>
      <Link to="/BankHome"> Admin </Link>
    </div>
  );
};

export default Login;
