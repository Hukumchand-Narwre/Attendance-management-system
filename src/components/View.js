import { React } from "react";
import Counter from "./Counter";

import NavigationBar from "./NavigationBar";
import classes from "./View.module.css";
import Image from "react-bootstrap/Image";
import Hukum from "../img/png.png";
import Mansi from "../img/Mansi.jpg";

export default function View(props) {
  const tanishq =
    "https://media-exp2.licdn.com/dms/image/C5603AQHZRdFdVW4YIg/profile-displayphoto-shrink_200_200/0/1652624766450?e=1662595200&v=beta&t=UqelnM2fM0PdZ6Ks-hdGUK7irew4R0MSJo75txcE74w";

  let img;

  //selecting image according to user
  if (props.credentials.name === "Hukum Narwre") img = Hukum;
  if (props.credentials.name === "Tanishq Sakhre") img = tanishq;
  if (props.credentials.name === "Mansi Schdev") img = Mansi;
  var today = new Date();
  const handleClick = async () => {
    var date =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear();
    const data = {
      date,
      name: props.credentials.name,
    };

    //Marking attendance of student
    const upload = await fetch(
      "https://sql-project-a7526-default-rtdb.firebaseio.com/attendance.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    //alert message will be shown if attendance marked successfully
    if (upload.ok) alert("attendance marked successfully");
  };
  return (
    <div>
      {!props.markAttendane && <Counter value={50} />}
      <NavigationBar credentials={props.credentials} />
      <div className={classes.view}>
        <div className={classes["img-container"]}>
          <Image src={img} rounded />
          <h2>{props.credentials.name}</h2>

          <button
            disabled={props.markAttendane}
            className={classes.btn}
            onClick={handleClick}
          >
            Mark your Attendance
          </button>
        </div>
      </div>
    </div>
  );
}
//1.github
//2.readability
//
//4.use of firebase
//5.completion
//6.gui of project
