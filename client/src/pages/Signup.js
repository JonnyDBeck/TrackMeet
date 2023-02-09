import React,  { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

const Signup = () => {
  const [newObject, setNewObject] = useState({});

  const [addUser, {error}] = useMutation(ADD_USER);

  const setSearchParam = (e) => {
    setNewObject({...newObject, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...newObject }
      });

      window.location.href = '/Login'
      console.log(data)
    } catch(err) {
      console.error(err);
    }
  };

  return (
    <>
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label>Username:</label>
      <input
        name="username"
        onChange={setSearchParam}
      />
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

      <button>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
    </>
  );
};

export default Signup;
