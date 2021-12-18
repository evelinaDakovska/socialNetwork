import { useState, useEffect, useMemo } from "react";

import * as postService from "../services/postService";

const usePostState = (postId) => {
  const [post, setPost] = useState({});

  const controller = useMemo(() => {
    const controller = new AbortController();

    return controller;
  }, []);

  useEffect(() => {
    postService.getOne(postId, controller.signal).then((postResult) => {
      setPost(postResult);
    });

    return () => {
      controller.abort();
    };
  }, [postId, controller]);

  return [post, setPost];
};

export default usePostState;
