import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import styles from "./Navbar.module.css";
import { ButtonContainer } from "../Customised Components/Button";

// import Brightness7Icon from "@material-ui/icons/Brightness7";
// import Brightness4Icon from "@material-ui/icons/Brightness4";

const Navbar = (props) => {
  // const themeMode = window.localStorage.getItem("theme");
  return (
    <div>
      <NavWrapper>
        <Link to="/" className="nav-link">
          my products
        </Link>
        {/* <nav>
                    <ul className={styles.nav__links}>
                        <li><a href="signup">SignUp</a></li>
                        <li><a href="login">Login</a></li>
                    </ul>
                </nav> */}
        <div className={styles.right_nav_items}>
          {/* {themeMode === "dark" ? (
            <Brightness7Icon
              style={{ fontSize: 35, cursor: "pointer" }}
              onClick={() => props.themeChange("light")}
            />
          ) : (
            <Brightness4Icon
              style={{ fontSize: 35, cursor: "pointer" }}
              onClick={() => props.themeChange("dark")}
            />
          )} */}
          <Link to="/cart" className="mr-auto px-3">
            <ButtonContainer>
              <span className="mr-2">
                <i className="fas fa-cart-plus" />
              </span>
              my cart
            </ButtonContainer>
          </Link>
        </div>
      </NavWrapper>
    </div>
  );
};

export default Navbar;

const NavWrapper = styled.header`
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  padding: 10px 8%;
  background-color: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  @media (max-width: 478px) {
    padding: 10px 0;
  }
`;
