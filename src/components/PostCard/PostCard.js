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
      <Link to="edit" className={styles.button}>
        <MdOutlineEdit />
      </Link>
      <a onClick={deleteHandler} className={styles.button}>
        <MdDeleteOutline />
      </a>
    </>
  );

  const userButtons = (
    <a onClick={likeHandler} className={styles.button}>
      Like
    </a>
  );

  return (
    <div className={styles.cardContainer}>
      <div className={styles.postCardForm}>
        <div className={styles.optionsMenu}>
          {user._id &&
            (user._id === post._ownerId ? ownerButtons : userButtons)}
          <span className={styles.likes}>
            <TiHeart /> {post.likes?.length}
          </span>
        </div>
        <div
          className={styles.imageContainer}
          style={{
            backgroundImage: `url(${post.imageURL})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
};

export default PostCard;
