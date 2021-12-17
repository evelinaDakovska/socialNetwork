import React from "react";
import { Link } from "react-router-dom";
import styles from "./AllPosts.module.css";

import PostCard from "../PostCard/PostCard";
import CreatePost from "../CreatePost/CreatePost";

const AllPosts = () => {
  return (
    <div id={styles.mainContainer}>
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default AllPosts;
