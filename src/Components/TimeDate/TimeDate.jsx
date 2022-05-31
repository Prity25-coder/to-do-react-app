import moment from "moment";
import React, { useEffect, useState } from "react";

const TimeDate = () => {
  const [dateAndTime, setDateAndTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      setDateAndTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
    }, 1000);
  }, []);

  return <div>{dateAndTime}</div>;
};

export default TimeDate;
