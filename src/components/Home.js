import React from "react";
import "../App.css";
import NavigationBar from "./NavigationBar";
export default function Home() {
  return (
    <div>
      <NavigationBar />
      <div className="first-section-img">
        <div className="bg"></div>
      </div>
      <div className="text-box">
        <h2>Digital Attendance Management System</h2>
        <p>
          This software has developed for daily attendance of students. It made
          easy to access the attendance information of a particular student.
          This software is helpful in evaluating the attendance eligibility of a
          student.
        </p>
      </div>
      <div className="copyrightContainer">&#169;Group 9</div>
    </div>
  );
}
