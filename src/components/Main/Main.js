import React from "react";
import { Link } from "react-router-dom";
import styles from "./Main.module.css";

import PostCard from "../PostCard/PostCard";
import CreatePost from "../CreatePost/CreatePost";

const Main = () => {
  return (
    <div id={styles.mainContainer}>
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default Main;
