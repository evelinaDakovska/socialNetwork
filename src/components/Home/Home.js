import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  const DetailsHandler = (e) => {
    e.preventDefault();
    console.log("Clicked!");
  };

  return (
    <div id={styles.homeContainer}>
      <h2>Best Posts</h2>
      <div id={styles.bestPosts}>
        <p className={styles.bestPostCard}>
          <img
            id={styles.image}
            src="https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270"
            alt="mushroom"
          />
          <div id={styles.title} onClick={DetailsHandler}>
            Title
          </div>
        </p>
        <p className={styles.bestPostCard}>
          <img
            id={styles.image}
            src="https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648?b=1&k=20&m=1279460648&s=170667a&w=0&h=uZa830sWo8hlFN0Y7FnQ14giNC0Z2EBNuTMuNJeJhQg="
            alt="book"
          />
          <div id={styles.title} onClick={DetailsHandler}>
            Title
          </div>
        </p>
        <p className={styles.bestPostCard}>
          <img
            id={styles.image}
            src="https://www.gettyimages.dk/gi-resources/images/500px/983794168.jpg"
            alt="birds"
          />
          <div id={styles.title} onClick={DetailsHandler}>
            Title
          </div>
        </p>
      </div>
    </div>
  );
};

export default Home;
