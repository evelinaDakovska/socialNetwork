import { Link } from "react-router-dom";
import { GrContactInfo } from "react-icons/gr";

import styles from "./PostCard.module.css";

const PostCard = ({ post }) => {
  let user = post.ownerName.split(" ");
  return (
    <div className={styles.cardContainer}>
      <div className={styles.postCardForm}>
        <Link
          to={`/user-profile`}
          title="User Profile"
          className={styles.button}
        >
          {`${user[0]}'s Profile`}
        </Link>

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
