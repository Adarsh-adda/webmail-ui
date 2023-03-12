import React from "react";
import { AiOutlineMail, AiOutlineMenu, AiOutlineStar } from "react-icons/ai";

const AllMails = () => {
  return (
    <>
      <Mail />
    </>
  );
};

const Mail = () => {
  return (
    <>
      <div className="flex items-center space-x-3 border-b hover:bg-slate-600 border-slate-700  px-2 py-1">
        <div>
          <AiOutlineStar />
        </div>
        <div className="font-bold">Name</div>
        <div className="text-ellipsis overflow-hidden whitespace-nowrap">
          Messagefha skfhaksfhah fkahfah flkhfshf hahklahkl
        </div>
      </div>
    </>
  );
};

export default AllMails;
