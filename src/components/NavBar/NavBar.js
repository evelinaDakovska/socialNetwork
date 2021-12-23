import { Link } from "react-router-dom";
import React, { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import styles from "./NavBar.module.css";
import logo from "./logo.png";

const NavBar = () => {
  const { user } = useContext(AuthContext);

  let guestNav = (
    <>
      <Link to="/login" title="Login">
        Login
      </Link>
      <Link to="/register" title="Register">
        Register
      </Link>
    </>
  );

  let userNav = (
    <>
      <div id={styles.greetUser}>
        Welcome,{" "}
        <Link to="/profile" title="Your Profile">
          {user.fullName}
        </Link>
      </div>
      <Link to="/create" title="Create">
        Create Post
      </Link>
      {/*       <Link to="/profile">Profile</Link> */}
      <Link to="/logout" title="Logout">
        Logout
      </Link>
    </>
  );

  return (
    <header id={styles.site_header}>
      <nav className={styles.navBar}>
        <Link to="/home" className={styles.logoContainer}>
          <img src={logo} className={styles.logo} title="Home" />
        </Link>
        {user.email ? userNav : guestNav}
      </nav>
    </header>
  );
};

export default NavBar;
