import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="w-full bg-slate-900 py-3 text-white border-b border-dimWhite flex items-center justify-between sm:px-12 px-6">
        <div>
          <Link to="/home">Webmail</Link>
        </div>

        <ul className="flex flex-1 justify-end">
          <li>
            <Link to="/#">Github</Link>
          </li>
          <li className="ml-4">
            <Link to="/#">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
