import React from "react";
import { Outlet, Link } from "react-router-dom";

const AuthPage = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
      <div>Auth Page</div>
      <ol>
        <li>
          <Link to="/auth/login">go to Login</Link>
        </li>
        <li>
          <Link to="/auth/register">go to Register</Link>
        </li>
        <li>
          <Link to="/auth/reset-password">go to Reset Password</Link>
        </li>
      </ol>
    </>
  );
};

export default AuthPage;
