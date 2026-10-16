import CardWidget from "../CardWidget/CardWidget";
import styles from "./Navbar.module.css";
import logo from "../../../src/assets/images/logo.jpg";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <img src={logo} alt="logo ecommerce" />
      <ul>
        <a href="#">
          <li>Tecnología</li>
        </a>
        <a href="#">
          <li>Informática</li>
        </a>
      </ul>
      <CardWidget />
    </div>
  );
};

export default NavBar;
