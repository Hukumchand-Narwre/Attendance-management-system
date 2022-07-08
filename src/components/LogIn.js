import React, { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import { useNavigate } from "react-router-dom";

export default function LogIn(props) {
  const [loginData, setloginData] = useState({
    name: "",
    password: "",
    admin: false,
    Student: false,
  });
  let name1;
  let Admin = false;
  let Student = false;
  let Password;
  const navigate = useNavigate();

  useEffect(() => {
    if (loginData.name !== "") {
      const fetchdata = async () => {
        //fetching login credentials from database
        try {
          const response = await fetch(
            "https://sql-project-a7526-default-rtdb.firebaseio.com/login.json"
          );
          const data = await response.json();
          const users = Object.values(data);
          const result = users.map((user, i) => {
            //validating login credentials of user
            if (
              user.name === loginData.name &&
              user.password === loginData.password
            ) {
              return user;
            } else {
              return null;
            }
          });
          const authenticatedUser = result.filter((element) => {
            return element !== null;
          });
          //if user is admin navigating him to admin page
          if (authenticatedUser[0]?.admin && loginData.admin) {
            props.handleCredentials(authenticatedUser[0]);
            navigate("/admin");
          } else {
            //if user is admin navigating him to view page
            if (authenticatedUser[0].Student && loginData.Student) {
              props.handleCredentials(authenticatedUser[0]);
              navigate("/login/view");
            } else {
              alert("Invalid Credentials");
            }
          }
        } catch (error) {
          console.log("error");
        }
      };
      fetchdata();
    }
  }, [loginData.name]);

  const handleNameInput = (event) => {
    name1 = event.target.value;
  };

  const handlePasswordChange = (event) => {
    Password = event.target.value;
  };

  const handleAdminRadio = (event) => {
    if (event.target.value === "on") {
      Admin = true;
    } else {
      Admin = false;
    }
  };

  const handleStudentRadio = (event) => {
    if (event.target.value === "on") {
      Student = true;
    } else {
      Student = false;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setloginData({
      name: name1,
      password: Password,
      Student,
      admin: Admin,
    });
  };
  return (
    <section className="section">
      <NavigationBar />
      <div>
        <div class="book">
          <div class="book__form">
            <form
              action="#"
              class="form"
              
              onSubmit={handleSubmit}
            >
              <div class="u-margin-bottom-medium">
                <h2 class="heading-secondary">{props.heading}</h2>
              </div>

              <div class="form__group">
                <input
                  type="text"
                  class="form__input"
                  placeholder="Full Name"
                  id="name"
                  required
                  onChange={handleNameInput}
                />
                <label htmlFor="name" class="form__label">
                  Full Name
                </label>
              </div>

              <div class="form__group">
                <input
                  type="password"
                  class="form__input"
                  placeholder="Password"
                  id="password"
                  required
                  onChange={handlePasswordChange}
                />
                <label htmlFor="password" class="form__label">
                  Password
                </label>
              </div>

              <div class="form__group u-margin-bottom-medium">
                <div class="form__radio-group">
                  <input
                    class="form__radio-input"
                    type="radio"
                    id="small"
                    name="student"
                    onChange={handleStudentRadio}
                  />
                  <label htmlFor="small" class="form__radio-label">
                    <span class="form__radio-button"></span>
                    Student
                  </label>
                </div>

                <div class="form__radio-group">
                  <input
                    class="form__radio-input"
                    type="radio"
                    id="large"
                    name="student"
                    onChange={handleAdminRadio}
                  />
                  <label htmlFor="large" class="form__radio-label">
                    <span class="form__radio-button"></span>
                    Admin
                  </label>
                </div>
              </div>

              <div class="form__group">
                <button class="btn-1 btn--green" type="submit">
                  Log IN &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
