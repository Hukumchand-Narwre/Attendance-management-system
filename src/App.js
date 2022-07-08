import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";

import Home from "./components/Home";
import LogIn from "./components/LogIn";
import View from "./components/View";

function App() {
  const [credentials, setCredentials] = useState("");

  const [markAttendane, setMarkAttendane] = useState(true);

  const getCredentials = (data) => {
    setCredentials(data);
  };

  const getAttendanceboolean = (value) => {
    setMarkAttendane(value);
    setTimeout(function () {
      setMarkAttendane(true);
      console.log("run");
    }, 60000);
  };

  console.log(markAttendane + "✨");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/login"
          element={
            <LogIn handleCredentials={getCredentials} heading="LogIN!" />
          }
        ></Route>
        <Route
          path="/login/view"
          element={
            <View credentials={credentials} markAttendane={markAttendane} />
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <Admin
              getAttendanceboolean={getAttendanceboolean}
              credentials={credentials}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
