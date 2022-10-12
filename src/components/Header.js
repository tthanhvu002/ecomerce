import logo from "../img/logo.svg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="" />
      <nav>
        <ul>
          <li>
            <Link to="/product-list">Shop</Link>
          </li>
          <li>
            <Link to="/order-detail">Orders</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <Link to="/signup" className="signup-btn">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/signin" className="login-btn">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
