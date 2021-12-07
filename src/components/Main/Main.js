import React from "react";
import { Link } from "react-router-dom";
import styles from "./Main.module.css";

import PostCard from "../PostCard/PostCard";
import CreatePost from "../CreatePost/CreatePost";

const Main = () => {
  return (
    <div className={styles.mainContent}>
      <div id={styles.mainContainer}>
        <CreatePost />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default Main;
