import { Link } from "react-router-dom";
import { GrContactInfo } from "react-icons/gr";

import styles from "./PostCard.module.css";

const PostCard = ({ post }) => {
  let user = post.ownerName.split(" ");

  let profileButton = (
    <Link
      to={`/user-profile/${post._ownerId}`}
      title="User Profile"
      className={styles.button}
    >
      {`${user[0]}'s Profile`}
    </Link>
  );

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
