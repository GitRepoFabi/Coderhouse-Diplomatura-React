import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import logo from "../../../src/assets/images/logo.jpg";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <img src={logo} alt="logo ecommerce" />
      <ul>
        <a href="#">
          <li>Auriculares inalámbricos</li>
        </a>
        <a href="#">
          <li>Relojes</li>
        </a>
        <a href="#">
          <li>Mochilas</li>
        </a>

        <a href="#">
          <li>Tecnología</li>
        </a>

        <a href="#">
          <li>Termos</li>
        </a>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
