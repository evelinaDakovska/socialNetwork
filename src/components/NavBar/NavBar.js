import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const { user } = useContext(AuthContext);

  let guestNav = (
    <>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </>
  );

  let userNav = (
    <>
      <div id={styles.greetUser}>Welcome, {user.firstName}</div>
      <Link to="/create">Create Post</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/logout">Logout</Link>
    </>
  );

  return (
    <header id={styles.site_header}>
      <nav className={styles.navBar}>
        <Link to="/home">Home</Link>
        <Link to="/all-posts">All Posts</Link>
        {user.email ? userNav : guestNav}
      </nav>
    </header>
  );
};

export default NavBar;
