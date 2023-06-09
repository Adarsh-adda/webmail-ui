import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(false);

  // const [userData, setUserData] = useState({});

  const navigate = useNavigate();
  const { isAuthenticated, login, error, setError } = useAuth();

  const submitHandler = async (e) => {
    e.preventDefault();
    await login(email, password);

    if (isAuthenticated) {
      navigate("/");
    }
  };
  return (
    <div className="bg-slate-900 h-screen flex flex-col justify-center items-center text-white">
      <div className=" flex justify-center items-center border border-slate-600 rounded-lg p-5">
        <form onSubmit={submitHandler} className="flex flex-col gap-5">
          <h1 className="text-xl font-bold text-center">Login</h1>
          {error && (
            <p className="flex justify-center text-red-600">
              Invalid Credentials
            </p>
          )}
          <input
            type={"email"}
            placeholder="Email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError(false);
            }}
            className="bg-slate-600 rounded-lg p-1 border-2 border-slate-900 outline-none focus-within:border-2 focus-within:border-violet-400"
          />
          <input
            type={"password"}
            placeholder="Password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            className="bg-slate-600 rounded-lg p-1 border-2 border-slate-900 outline-none focus-within:border-2 focus-within:border-violet-400"
          />

          <button
            type="submit"
            className="bg-violet-700 p-1 rounded-lg hover:bg-violet-500"
          >
            Login
          </button>
        </form>
      </div>
      <div className="p-2">
        Dont have an Account?
        <Link
          to="/register"
          className="bg-violet-800 py-1  px-2 m-1 rounded-lg hover:bg-violet-500"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default LoginScreen;
