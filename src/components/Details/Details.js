import { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TiHeart, TiHeartFullOutline, TiHeartOutline } from "react-icons/ti";

import styles from "./Details.module.css";
import * as postService from "../../services/postService";
import AuthContext from "../../contexts/AuthContext";
import postState from "../../hooks/postState";

const Details = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { postId } = useParams();
  const [post, setPost] = postState(postId);

  useEffect(() => {
    postService.getPostLikes(postId).then((likes) => {
      setPost((state) => ({ ...state, likes }));
    });
  }, []);

  const deleteHandler = (e) => {
    e.preventDefault();
    postService.remove(post._id, user.accessToken).then(() => {
      navigate("/home");
    });
  };

  const likeHandler = () => {
    if (user._id === post._ownerId) {
      return;
    }

    if (post.likes.includes(user._id)) {
      alert("You cannot like again");
      return;
    }

    postService.like(user._id, postId).then(() => {
      setPost((state) => ({ ...state, likes: [...state.likes, user._id] }));
    });
  };

  const ownerButtons = (
    <>
      <button to="edit" title="Edit" className={styles.button}>
        Edit
      </button>
      <button onClick={deleteHandler} title="Delete" className={styles.button}>
        Delete
      </button>
    </>
  );

  const userButtons = (
    <a onClick={likeHandler} className={styles.button}>
      {post.likes?.includes(user._id) ? (
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
          <p id={styles.description}>{post.description}</p>
          <div className={styles.actions}>
            {user._id &&
              (user._id === post._ownerId ? ownerButtons : userButtons)}
            <div className={styles.likes}>
              <span className={styles.totalLikes} title="Total likes">
                <TiHeart /> {post.likes?.length}
              </span>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Details;
