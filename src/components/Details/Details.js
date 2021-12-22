import { useEffect, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TiHeart, TiHeartFullOutline, TiHeartOutline } from "react-icons/ti";
import { GoLocation } from "react-icons/go";

import styles from "./Details.module.css";
import * as postService from "../../services/postService";
import AuthContext from "../../contexts/AuthContext";
import postState from "../../hooks/postState";

const Details = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { postId } = useParams();
  const [post, setPost] = postState(postId);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    postService.getPostLikes(postId).then((postResult) => {
      setLikes(postResult);
    });
  });

  const deleteHandler = (e) => {
    e.preventDefault();
    postService.remove(post._id, user.accessToken).then(() => {
      navigate("/home");
    });
  };

  const editHandler = (e) => {
    e.preventDefault();
    navigate(`/edit/${post._id}`);
  };

  const likeHandler = () => {
    if (user._id === post._ownerId) {
      return;
    }

    if (likes?.some((currLike) => currLike.userId === user._id)) {
      alert("You cannot like again");
      return;
    }

    postService.like(user._id, postId).then(() => {
      setLikes((state) => [...state, { userId: user._id, postId }]);
    });
  };

  const ownerButtons = (
    <>
      <button
        onClick={editHandler}
        to={`/edit/${post._id}`}
        title="Edit"
        className={styles.button}
      >
        Edit
      </button>
      <button onClick={deleteHandler} title="Delete" className={styles.button}>
        Delete
      </button>
    </>
  );

  const userButtons = (
    <a onClick={likeHandler} className={styles.button}>
      {likes?.some((currLike) => currLike.userId === user._id) ? (
        <TiHeartFullOutline title="Already liked" />
      ) : (
        <TiHeartOutline title="Like" />
      )}
    </a>
  );

  return (
    <div className={styles.cardContainer}>
      <div className={styles.postCardForm}>
        <fieldset className={styles.cardField}>
          <legend id={styles.ownerName}>{post.ownerName}</legend>
          <img
            id={styles.image}
            src={post.imageURL}
            alt="user generated images"
          />
          <h4 id={styles.location}>
            <GoLocation />
            {post.location}
          </h4>
          <p id={styles.description}>{post.description}</p>
          <div className={styles.actions}>
            {user._id &&
              (user._id === post._ownerId ? ownerButtons : userButtons)}
            <div className={styles.likes}>
              <span className={styles.totalLikes} title="Total likes">
                <TiHeart /> {likes?.length || 0}
              </span>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Details;
