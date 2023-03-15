import axios from "axios";
import React, { useState, useEffect } from "react";
import jwt from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [registerError, setRegisterError] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = localStorage.getItem("user");
    return token ? true : false;
  });

  const navigate = useNavigate();

  const login = (email, password) => {
    let endpoint = "http://127.0.0.1:8000/api/login";
    let data = {
      email: email,
      password: password,
    };
    const config = {
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    axios
      .post(endpoint, data, config)
      .then((res) => {
        if (res.data) {
          const token = jwt(res.data.jwt);
          localStorage.setItem("user", JSON.stringify(token));
          localStorage.setItem("isAuthenticated", true);
          setIsAuthenticated(true);
          navigate("/");
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        setError(true);
      });
  };

  const register = (name, email, password) => {
    let endpoint = "http://127.0.0.1:8000/api/register";
    let data = {
      name: name,
      email: email,
      password: password,
    };
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    axios
      .post(endpoint, data, config)
      .then((res) => {
        if (res.data) {
          localStorage.setItem("user", JSON.stringify(res.data));
          localStorage.setItem("isAuthenticated", true);
          setIsAuthenticated(true);
          navigate("/");
        }
      })
      .catch((err) => {
        setRegisterError(true);
      });
  };

  const logout = () => {
    let endpoint = "http://127.0.0.1:8000/api/logout";
    axios.post(endpoint).then((res) => {
      localStorage.removeItem("user");
      localStorage.setItem("isAuthenticated", false);
      setIsAuthenticated(false);
      navigate("/login");
    });
  };

  useEffect(() => {
    // Remove the stored value for isAuthenticated when the component unmounts
    return () => {
      localStorage.removeItem("isAuthenticated");
    };
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      if (
        window.location.pathname === "/login" ||
        window.location.pathname === "/register"
      ) {
        navigate("/");
      }
    }
  }, [isAuthenticated, navigate]);

  const value = {
    error,
    setError,
    setRegisterError,
    registerError,
    isAuthenticated,
    login,
    register,
    logout,
  };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
};
``;
