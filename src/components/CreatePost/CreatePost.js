import styles from "./CreatePost.module.css";

const CreatePost = () => {
  const createPostHandler = (e) => {
    e.preventDefault();
    console.log("Posted!");
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
              type="text"
              name="title"
              id={styles.title}
              placeholder="Title *"
            />
          </p>
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
