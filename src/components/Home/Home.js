import { useEffect, useState } from "react";

import * as postService from "../../services/postService";
import styles from "./Home.module.css";
import PostCard from "../PostCard/PostCard";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getAll().then((result) => {
      setPosts(result);
    });
  }, []);

  let reversedPosts = Object.assign([], posts).reverse();

  return (
    <div id={styles.mainContainer}>
      {posts.length > 0 ? (
        <>
          {reversedPosts.map((x) => (
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

export default Home;
