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
    body: JSON.stringify({ ...postData, likes: [] }),
  }).then((res) => res.json());
};

export const like = async (userId, postId) => {
  let userItem = localStorage.getItem("user");
  let user = JSON.parse(userItem);
  user = user.accessToken;

  let response = await fetch(`${baseUrl}/likes`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-Authorization": user,
    },
    body: JSON.stringify({ userId, postId }),
  });
  let result = await response.json();

  return Object.values(result);
};

export const getPostLikes = async (postId) => {
  const query = encodeURIComponent(`postId="${postId}"`);
  let response = await fetch(`${baseUrl}/likes?select=userId&where=${query}`);
  let jsonData = await response.json();
  let result = Object.values(jsonData);

  return result;
};
