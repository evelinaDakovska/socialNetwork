import * as request from "./requester";
const baseUrl = "http://localhost:3030/data";

export const create = async (postData, token) => {
  let response = await fetch(`${baseUrl}/posts`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify({ ...postData, likes: [] }),
  });

  let result = await response.json();

  return result;
};

export const getOne = (postId) => {
  return fetch(`${baseUrl}/posts/${postId}`).then((res) => res.json());
};

export const getAll = async () => {
  let response = await fetch(`${baseUrl}/posts`);

  let posts = await response.json();

  let result = Object.values(posts);

  return result;
};

export const userPosts = async (ownerId) => {
  let query = encodeURIComponent(`_ownerId="${ownerId}"`);

  let response = await fetch(`${baseUrl}/posts?where=${query}`);

  let posts = await response.json();

  let result = Object.values(posts);

  return result;
};

export const remove = (postId, token) => {
  return fetch(`${baseUrl}/posts/${postId}`, {
    method: "DELETE",
    headers: {
      "X-Authorization": token,
    },
  }).then((res) => res.json());
};

export const edit = (postId, postData) => {
  let userItem = localStorage.getItem("user");
  let user = JSON.parse(userItem);
  user = user.accessToken;

  return fetch(`${baseUrl}/posts/${postId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "X-Authorization": user,
    },
    body: JSON.stringify(postData),
  }).then((res) => res.json());
};

export const like = (userId, postId) =>
  request.post(`${baseUrl}/likes`, { userId, postId });

export const getPostLikes = (postId) => {
  const query = encodeURIComponent(`postId="${postId}"`);

  return request
    .get(`${baseUrl}/likes?select=userId&where=${query}`)
    .then((res) => res.map((x) => x.userId));
};
