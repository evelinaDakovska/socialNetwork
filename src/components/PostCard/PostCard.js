import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TiHeart } from "react-icons/ti";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";

import * as postService from "../../services/postService";
import AuthContext from "../../contexts/AuthContext";
import styles from "./PostCard.module.css";

const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const deleteHandler = (e) => {
    e.preventDefault();

    postService.remove(post._id, user.accessToken).then(() => {
      navigate("/home");
    });
  };

  const likeHandler = (e) => {
    e.preventDefault();

  };

  const ownerButtons = (
    <>
      <Link className={styles.button} to="edit">
        <MdOutlineEdit />
      </Link>
      <a className={styles.button} onClick={deleteHandler}>
        <MdDeleteOutline />
      </a>
    </>
  );

  const userButtons = (
    <a className={styles.button} onClick={likeHandler}>
      Like
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
{/*           <p id={styles.description}>{post.description}</p>
 */}          <div className={styles.actions}>
            {user._id &&
              (user._id === post._ownerId ? ownerButtons : userButtons)}
            <div className={styles.likes}>
              <span className={styles.totalLikes}>
                <TiHeart /> {post.likes?.length}
              </span>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default PostCard;
