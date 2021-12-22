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

    let userProfile = (
      <Link to={`/profile`} title="Your Profile" className={styles.button}>
        Your Profile
      </Link>
    );

    let otherUserProfile = (
      <Link
        to={`/user-profile/${post._ownerId}/${post.ownerName}`}
        title="User Profile"
        className={styles.button}
      >
        {`${postOwner[0]}'s Profile`}
      </Link>
    );

    profileButton = user._id === post._ownerId ? userProfile : otherUserProfile;
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
