import React from "react"; 
import { Link } from "react-router-dom";
import styles from './Main.module.css';

import PostCard from "../PostCard/PostCard";
import CreatePost from "../CreatePost/CreatePost";


const Main=()=>{
return (
<div className={styles.main_content}>
    <CreatePost/>
    <PostCard/>
</div>
);
};

export default Main;