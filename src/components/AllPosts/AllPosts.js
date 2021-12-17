import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as postService from "../../services/postService";
import styles from "./AllPosts.module.css";
import PostCard from "../PostCard/PostCard";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getAll().then((result) => {
      setPosts(result);
    });
  }, []);

  return (
    <div id={styles.mainContainer}>
      {posts.length > 0 ? (
        <>
          {posts.map((x) => (
            <PostCard key={x._id} post={x} />
          ))}
        </>
      ) : (
        <div id={styles.cardContainer}>
          <div className={styles.postCardForm}>
            <fieldset className={styles.cardField}>
              <p className="no-posts">No posts in database!</p>
            </fieldset>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllPosts;
