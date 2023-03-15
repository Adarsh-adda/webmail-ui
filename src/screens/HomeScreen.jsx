import React, { useEffect, useState } from "react";
import { AiOutlineMail, AiOutlineMenu, AiOutlineStar } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import AllMails from "../components/AllMails";
import StarredMails from "../components/StarredMails";
import { useAuth } from "../context/AuthContext";

const HomeScreen = () => {
  const [toggle, setToggle] = useState(1);
  const [user, setUser] = useState(null);

  useEffect(() => {
    isAuthenticated();
  });

  const isAuthenticated = () => {
    setUser(localStorage.getItem("user"));
  };
  const handleToggle = (value) => {
    setToggle(value);
  };

  const active =
    "bg-slate-600 flex justify-center items-center space-x-2 rounded-lg px-1";

  const inactive = " flex justify-center items-center space-x-2 px-1";
  return (
    <div className="bg-slate-900 h-screen px-6 sm:px-12 text-white">
      <div className="flex flex-col sm:flex-row sm:p-6 p-2 gap-3">
        {/* sidebar start */}
        <div className="flex sm:flex-col flex-row items-center border border-slate-500 sm:w-[20vw] w-full justify-evenly sm:justify-start rounded-lg py-2 ">
          <div>
            <button>
              <div
                className={`${toggle === 1 ? active : inactive}`}
                onClick={() => handleToggle(1)}
              >
                <div>
                  <AiOutlineMail />
                </div>
                <div>All Mail</div>
              </div>
            </button>
          </div>
          <div>
            <button>
              <div
                className={`${toggle === 2 ? active : inactive}`}
                onClick={() => handleToggle(2)}
              >
                <div>
                  <AiOutlineStar />
                </div>
                <div>Starred</div>
              </div>
            </button>
          </div>
        </div>
        {/* sidebar end */}

        {/* main content start */}

        <div className="flex flex-col sm:w-[70vw] w-full sm:border border  border-slate-500 rounded-lg sm:p-6 p-2">
          {toggle == 1 ? <AllMails /> : null}
          {toggle == 2 ? <StarredMails /> : null}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
