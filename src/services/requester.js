export const request = async (method, url, data) => {
    let result = null;

    if (method === 'GET') {
        result = fetch(url);
    } else {
        result = fetch(url, {
            method,
            headers: {
                'content-type': 'application/json',
                'X-Authorization': getToken()
            },
            body: JSON.stringify(data)
        });
    }
    
    return result.then(responseHandler);
};

async function responseHandler(res) {
    let jsonData = await res.json();

    if (res.ok) {
        return Object.values(jsonData);
    } else {
        throw jsonData;
    }
};

function getToken() {
    try {
        let userItem = localStorage.getItem('user');

        if (!userItem) {
            alert ('You must be authenticated');
        }

        let user = JSON.parse(userItem);

        return user.accessToken;
    } catch(err) {
        console.log(err);
    }
}

export const get = request.bind(null, 'GET');
export const put = request.bind(null, 'PUT');
export const post = request.bind(null, 'POST');

/* export const getPostLikes = (postId) => {
    const query = encodeURIComponent(`postId="${postId}"`);
  
    let result = fetch(`${baseUrl}/likes?select=userId&where=${query}`);
  
    return result.then((res) => res.map((x) => x.userId));
  };

  export const like = async (userId, postId) => {
    let userItem = localStorage.getItem("user");
    let user = JSON.parse(userItem);
    user = user.accessToken;
  
    let response = fetch(`${baseUrl}/likes`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-Authorization": user,
      },
      body: JSON.stringify(userId, postId),
    });
    let result = await response.json();
  
    return Object.values(result);
  }; */