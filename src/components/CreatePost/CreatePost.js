import { useContext } from "react";

import styles from "./CreatePost.module.css";
import { useNavigate } from "react-router-dom";
import * as postService from "../../services/postService";
import AuthContext from "../../contexts/AuthContext";

const CreatePost = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const createPostHandler = (e) => {
    e.preventDefault();

    let postData = new FormData(e.currentTarget);
    let imageURL = postData.get("imageURL");
    let description = postData.get("description");
    let ownerName = user.fullName;

    postService
      .create(
        {
          description,
          imageURL,
          ownerName
        },
        user.accessToken
      )
      .then((result) => {
        navigate("/home");
      });
  };

  return (
    <div id={styles.createContainer}>
      <form
        id={styles.createPostForm}
        method="POST"
        onSubmit={createPostHandler}
      >
        <fieldset>
          <legend>Your Post</legend>
          <p className={styles.field}>
            <input
              type="url"
              name="imageURL"
              id={styles.imageURL}
              placeholder="Image URL *"
            />
          </p>
          <p className={styles.field}>
            <textarea
              type="text"
              name="description"
              id={styles.description}
              placeholder="Description *"
            />
          </p>
          <input
            className={styles.buttonSubmit}
            type="submit"
            value="CreatePost"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default CreatePost;
