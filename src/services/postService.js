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

export const myPosts = async (ownerId) => {
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
