import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { DomainUrl } from "./Domain";

const StarredMails = () => {
  return (
    <>
      <StarredMail />
    </>
  );
};

const StarredMail = () => {
  const [starredMailData, setStarredMailData] = useState([]);

  useEffect(() => {
    getMails();
  }, []);
  const getMails = () => {
    let endpoint = DomainUrl + "api/starred";
    axios.get(endpoint).then((res) => {
      setStarredMailData(res.data);
    });
  };
  return (
    <>
      {starredMailData?.map((starredmail, index) => (
        <Fragment key={starredmail.id}>
          <div className="flex items-center space-x-3 border-b hover:bg-slate-600 border-slate-700  px-2 py-1">
            <div className="font-mono text-ellipsis overflow-hidden whitespace-nowrap w-1/3">
              {starredmail.receiver}
            </div>
            <div className="text-ellipsis overflow-hidden whitespace-nowrap">
              {starredmail.subject}
            </div>
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default StarredMails;
