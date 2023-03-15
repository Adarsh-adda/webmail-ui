import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const [user, setUser] = useState("");
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    setUser(localStorage.getItem("user"));
  };

  const handleLogout = () => {
    logout();
    setUser("");
  };

  return (
    <header>
      <nav className="w-full bg-slate-900 py-3 text-white border-b border-dimWhite flex items-center justify-between sm:px-12 px-6">
        <div>
          <Link to="/">Webmail</Link>
        </div>

        <ul className="flex flex-1 justify-end">
          {isAuthenticated ? (
            <li className="ml-4">
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li className="ml-4">
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
