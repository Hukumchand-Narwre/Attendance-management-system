import React, { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import BasicExample from "./Table";

export default function Admin(props) {
  const [markAttendane, setMarkAttendane] = useState(true);
  useEffect(() => {
    props.getAttendanceboolean(markAttendane);
  }, [markAttendane]);
  const passMarkAttendance = (value) => {
    setMarkAttendane(value);
  };

  return (
    <div>
      <NavigationBar credentials={props.credentials} />
      <BasicExample passMarkAttendance={passMarkAttendance} />
    </div>
  );
}
