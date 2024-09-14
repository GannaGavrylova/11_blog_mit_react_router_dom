import styles from "./styles.module.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar_container}>
      <ul>
        <li>
          <Link to="/" style={{ color: "blue" }}>
            Главная{" "}
          </Link>
        </li>
        <li>
          <NavLink
            to="/articles"
            style={({ isActive }) => ({
              color: isActive ? "red" : "blue",
            })}
          >
            Статьи
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
