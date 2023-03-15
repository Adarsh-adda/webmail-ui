import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register, registerError, setRegisterError } = useAuth();
  const submitHandler = (e) => {
    e.preventDefault();
    register(name, email, password);
  };

  return (
    <div className="bg-slate-900 h-screen flex flex-col justify-center items-center text-white">
      <div className=" flex justify-center items-center border border-slate-600 rounded-lg p-5">
        <form onSubmit={submitHandler} className="flex flex-col gap-5">
          <h1 className="text-xl font-bold text-center">Register</h1>
          {registerError && (
            <p className="flex justify-center text-red-600">
              Invalid Credentials
            </p>
          )}
          <input
            type={"text"}
            placeholder="Name"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setRegisterError(false);
            }}
            className="bg-slate-600 rounded-lg p-1 border-2 border-slate-900 outline-none focus-within:border-2 focus-within:border-violet-400"
          />
          <input
            type={"email"}
            placeholder="Email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setRegisterError(false);
            }}
            className="bg-slate-600 rounded-lg p-1 border-2 border-slate-900 outline-none focus-within:border-2 focus-within:border-violet-400"
          />
          <input
            type={"password"}
            required
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setRegisterError(false);
            }}
            className="bg-slate-600 rounded-lg p-1 border-2 border-slate-900 outline-none focus-within:border-2 focus-within:border-violet-400"
          />

          <button
            type="submit"
            className="bg-violet-700 p-1 rounded-lg hover:bg-violet-500"
          >
            Register
          </button>
        </form>
      </div>
      <div className="p-2">
        Have an Account?
        <Link
          to="/login"
          className="bg-violet-800 py-1  px-2 m-1 rounded-lg hover:bg-violet-500"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default RegisterScreen;
