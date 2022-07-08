import classes from "./NavigationBar.module.css";
import { Link } from "react-router-dom";
function NavigationBar(props) {
  return (
    <header className={classes.header}>
      <a className={classes.logo} href="https://sbjit.edu.in/">
        <img
          src="https://sbjit.edu.in/wp-content/uploads/2021/07/sbjitlogof4.png"
          alt="college-logo"
        />
      </a>
      <nav>
        <ul className={classes.ul}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Log IN</Link>
          </li>
          {props.credentials ? (
            <li>
              <Link to="0#">{props.credentials.name}</Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </header>
  );
}
export default NavigationBar;
