import { useState, useEffect } from "react";
import { useContext } from "react";

import * as postService from "../../services/postService";
import AuthContext from "../../contexts/AuthContext";
import styles from "./Profile.module.css";
import PostCard from "../PostCard/PostCard";

const Profile = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    postService.userPosts(user._id).then((postResult) => {
      setPosts(postResult);
    });
  }, []);

  let reversedPosts = Object.assign([], posts).reverse();

  return (
    <div id={styles.mainContainer}>
      <h2 id={styles.nameTitle}>{user.fullName}'s Profile</h2>
      {reversedPosts.length > 0 ? (
        <>
          {reversedPosts.map((x) => (
            <PostCard key={x._id} post={x} />
          ))}
        </>
      ) : (
        <div id={styles.cardContainer}>
          <div className={styles.postCardForm}>
            <fieldset className={styles.cardField}>
              <p className="no-posts">You have no posts!</p>
            </fieldset>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
