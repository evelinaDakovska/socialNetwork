import React from "react"; 
import { Link } from "react-router-dom";
import styles from './Main.module.css';

import PostCard from "../PostCard/PostCard";


const Main=()=>{
return (
<div className={styles.main_content}>
    <PostCard/>
</div>
);
};

export default Main;