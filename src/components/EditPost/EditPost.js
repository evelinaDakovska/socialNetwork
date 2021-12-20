import { useParams, useNavigate } from "react-router-dom";
import * as postService from "../../services/postService";
import usePostState from "../../hooks/postState";

import styles from "./EditPost.module.css";

const Edit = () => {
  const { postId } = useParams();
  const [post] = usePostState(postId);
  const navigate = useNavigate();

  const editHandler = (e) => {
    e.preventDefault();

    let postData = Object.fromEntries(new FormData(e.currentTarget));

    postService.edit(post._id, postData).then((result) => {
      navigate(`/details/${post._id}`);
    });
  };

  return (
    <div id={styles.editContainer}>
      <form id={styles.editPostForm} method="POST" onSubmit={editHandler}>
        <fieldset>
          <legend>Your Post</legend>
          <p className={styles.field}>
            <input
              type="url"
              name="imageURL"
              id={styles.imageURL}
              defaultValue={post.imageURL}
            />
          </p>
          <p className={styles.field}>
            <textarea
              type="text"
              name="description"
              id={styles.description}
              defaultValue={post.description}
            />
          </p>
          <input
            className={styles.buttonSubmit}
            type="submit"
            value="Edit Post"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default Edit;
