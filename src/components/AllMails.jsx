import { Box, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { AiOutlineMail, AiOutlineMenu, AiOutlineStar } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { DomainUrl } from "./Domain";
const AllMails = () => {
  const [mailData, setMailData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getMails();
  }, [pageNo]);

  const getMails = () => {
    setLoad(true);
    let endpoint = DomainUrl + `api/mails?page=${pageNo}`;

    axios.get(endpoint).then((res) => {
      setMailData(res.data);
    });
    setLoad(false);
  };
  const handlePrevious = () => {
    setPageNo(pageNo - 1);
  };
  const handleNext = () => {
    setPageNo(pageNo + 1);
  };
  return (
    <>
      {load && (
        <div className="flex justify-center">
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      )}
      {mailData &&
        mailData.results?.map((mail, index) => (
          <Fragment key={mail.id}>
            <Mail mail={mail} />
          </Fragment>
        ))}

      <div className="flex justify-center items-center mt-1 space-x-9 ">
        {mailData.previous && (
          <div
            onClick={handlePrevious}
            className="flex items-center gap-1 cursor-pointer hover:bg-slate-600 rounded-lg p-1"
          >
            <button>
              <BiArrowBack />
            </button>
            Previous
          </div>
        )}

        <p className="border px-2 rounded-lg">
          {mailData?.current_page_number}
        </p>
        {mailData.next && (
          <div
            onClick={handleNext}
            className="flex items-center gap-1 cursor-pointer hover:bg-slate-600 rounded-lg p-1"
          >
            Next
            <button>
              <BiArrowBack className="rotate-180" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

const Mail = ({ mail }) => {
  const [starred, setStarred] = useState(mail.starred);
  const [load, setLoad] = useState(false);
  const handleStars = () => {
    let endpoint = DomainUrl + `api/mails/${mail.id}`;
    let data = {
      id: mail.id,
      receiver: mail.receiver,
      subject: mail.subject,
      body: mail.body,
      date: mail.date,
      starred: !mail.starred,
    };
    axios.put(endpoint, data).then((res) => {
      setStarred(res.data.starred);
    });
  };
  return (
    <>
      <div className="flex items-center space-x-3 border-b hover:bg-slate-600 border-slate-700  px-2 py-1">
        <div onClick={handleStars}>
          {starred ? <AiOutlineStar color="yellow" /> : <AiOutlineStar />}{" "}
        </div>
        <div className="font-mono text-ellipsis overflow-hidden whitespace-nowrap w-1/3">
          {mail.receiver}
        </div>
        <div className="text-ellipsis overflow-hidden whitespace-nowrap">
          {mail.subject}
        </div>
      </div>
    </>
  );
};

export default AllMails;
