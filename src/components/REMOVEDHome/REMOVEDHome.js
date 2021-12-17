/* import React, { useState } from "react";
import styles from "./Home.module.css";

import Details from "../Details/Details";

const Home = () => {
  let dialogOpened = false;

  const firstBackground =
    "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270";
  const secondBackground =
    "https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648?b=1&k=20&m=1279460648&s=170667a&w=0&h=uZa830sWo8hlFN0Y7FnQ14giNC0Z2EBNuTMuNJeJhQg=";
  const thirdBackground =
    "https://www.gettyimages.dk/gi-resources/images/500px/983794168.jpg";

  return (
    <div id={styles.homeContainer}>
      <h2>Best Posts</h2>
      <div id={styles.bestPosts}>
        <div
          className={styles.bestPostCard}
          style={{
            backgroundImage: `url(${firstBackground})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div id={styles.title} onClick={() => (dialogOpened = true)}>
            Title
          </div>
        </div>
        <div
          className={styles.bestPostCard}
          style={{
            backgroundImage: `url(${secondBackground})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div id={styles.title} onClick={() => (dialogOpened = true)}>
            Title
          </div>
        </div>
        <div
          className={styles.bestPostCard}
          style={{
            backgroundImage: `url(${thirdBackground})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div id={styles.title} onClick={() => (dialogOpened = true)}>
            Title
          </div>
        </div>
        <Details opened={dialogOpened} />
        {/* SetState!!! */}
      </div>
    </div>
  );
};

export default Home;
 */