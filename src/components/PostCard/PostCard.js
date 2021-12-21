import { Link } from "react-router-dom";
import { useContext } from "react";
import { GrContactInfo } from "react-icons/gr";

import styles from "./PostCard.module.css";
import AuthContext from "../../contexts/AuthContext";

const PostCard = ({ post }) => {
  const { user } = useContext(AuthContext);

  let profileButton;
  if (post.ownerName) {
    let postOwner = post.ownerName.split(" ");
    profileButton = (
      <Link
        to={`/user-profile/${post._ownerId}`}
        title="User Profile"
        className={styles.button}
      >
        {user._id &&
          (user._id === post._ownerId
            ? "Your Profile"
            : `${postOwner[0]}'s Profile`)}
      </Link>
    );
  }

  let URL = window.location.pathname;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.postCardForm}>
        {URL === "/home" ? profileButton : null}
        <Link
          to={`/details/${post._id}`}
          title="Details"
          className={styles.button}
        >
          <GrContactInfo />
        </Link>
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
