import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import * as postService from "../../services/postService";
import styles from "./OtherUserProfile.module.css";
import PostCard from "../PostCard/PostCard";
import AuthContext from "../../contexts/AuthContext";

const OtherUserProfile = () => {
  const [posts, setPosts] = useState([]);
  const { userId,name } = useParams();


  useEffect(() => {
    postService.userPosts(userId).then((postResult) => {
      setPosts(postResult);
    });
  }, []);

  let reversedPosts = Object.assign([], posts).reverse();

  return (
    <div id={styles.mainContainer}>
      <h2 id={styles.nameTitle}>{name}'s Profile</h2>
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

export default OtherUserProfile;
