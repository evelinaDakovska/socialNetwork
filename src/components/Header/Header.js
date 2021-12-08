import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import styles from "./Header.module.css";

const Header = () => {
  const { user } = useContext(AuthContext);

  let guestNav = (
    <div id={styles.guest}>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );

  let userNav = (
    <div id={styles.user}>
      <span>Welcome, {user.email}</span>
      <Link to="/profile">Profile</Link>
      <Link to="/create">Create Post</Link>
      <Link to="/logout">Logout</Link>
    </div>
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

export default Header;
