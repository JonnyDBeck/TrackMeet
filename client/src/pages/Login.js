import React,  { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

const Login = () => {
  const [newObject, setNewObject] = useState({});

  const [login, {error}] = useMutation(LOGIN_USER);

  const setSearchParam = (e) => {
    setNewObject({...newObject, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await login({
        variables: { ...newObject }
      });

      console.log(data)

      localStorage.setItem("user", data.login.token);

      window.location.href = '/'
    } catch(err) {
      console.error(err);
    }
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>

      <label>Email:</label>
      <input
        name="email"
        type="email"
        onChange={setSearchParam}
      />
      <label>Password:</label>
      <input
        name="password"
        type="password"
        onChange={setSearchParam}
      />

      <button>Log in</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
