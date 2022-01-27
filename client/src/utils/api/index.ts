import axios from 'axios';
import {API_URL,errorAlert, handleErrorMessage, successAlert} from '../index.js'


const config = {
  headers: {
    'Content-Type': 'application/json',
  }
}


/**
 * @param  {String} token
 */

export const getProfile = async ({queryKey}) => {
  const [_key, token] = queryKey;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const { data } = await axios.get(`${API_URL}/api/user/profile`, config);
    return data.user;
  } catch (err:any) {
    errorAlert(handleErrorMessage(err));
  }
}

export const getUserById = async ({ queryKey }) => {
  const [_key, id] = queryKey;
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    if (id) {
      const { data } = await axios.get(`${API_URL}/api/user/${id}`, config);
      return data.user;
    }
  } catch (err) {
    errorAlert(handleErrorMessage(err));
  }
};


/**
 * @param  {String} {token
 * @param  {String} userId}
 * @description follow user
 */
 export const followUser = async ({ token, id }) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const { data } = await axios.put(
      `${API_URL}/api/user/follow`,
      { id },
      config
    );
    successAlert(data.message);
  } catch (err) {
    errorAlert(handleErrorMessage(err));
  }
};

/**
 * @param  {String} {token
 * @param  {String} id}
 * @description unfollow user
 */
export const unFollowUser = async ({ token, id }) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const { data } = await axios.post(
      `${API_URL}/api/user/unfollow`,
      { id },
      config
    );
    successAlert(data.message);
  } catch (err) {
    errorAlert(handleErrorMessage(err));
  }
};



/**
 * @param  {String} {token
 * @param  {object} ...tweetData}
 */
export const composePost = async ({ token, ...postData }) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.post(
      `${API_URL}/api/post`,
      { ...postData },
      config
    );
    successAlert(data.message);
  } catch (err) {
    errorAlert(handleErrorMessage(err));
  }
};

/**
 * @param  {String} token
 * @description Get All Tweets
 */
export const getPost = async ({ queryKey }) => {
  const [_key, token, offset] = queryKey;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.get(
      `${API_URL}/api/post?skip=${offset}`,
      config
    );
    return data;
  } catch (err) {
    errorAlert(handleErrorMessage(err));
  }
};

/**
 * @param  {String} {token
 * @param  {String} id}
 * @description Delete post by ID
 */
export const getUserPosts = async ({ queryKey }) => {
  const [_key, id, offset, token] = queryKey;

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    if (id) {
      const { data } = await axios.get(
        `${API_URL}/api/post/${id}/?skip=${offset}`,
        config
      );
      return data;
    }
  } catch (err) {
    errorAlert(handleErrorMessage(err));
  }
};

/**
 * @param  {String} {token
 * @param  {String} id}
 * @description Delete post by ID
 */
export const deletePost = async ({ token, id }) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.delete(`${API_URL}/api/post/${id}`, config);
    successAlert(data.message);
  } catch (err) {
    errorAlert(handleErrorMessage(err));
  }
};

/**
 * @param  {String} {token
 * @param  {String} post_id}
 * @description Like post
 */
export const likePost = async ({ token, id }) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const { data } = await axios.put(
      `${API_URL}/api/post/like`,
      { id },
      config
    );
    successAlert(data.message);
  } catch (err) {
    errorAlert(handleErrorMessage(err));
  }
};

// Get all users
export const getUsers = async ({ queryKey }) => {
  const [_key, offset] = queryKey;
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const { data } = await axios.get(
      `${API_URL}/api/user?skip=${offset}`,
      config
    );
    return data;
  } catch (err) {
    errorAlert(handleErrorMessage(err));
  }
};

/**
 * @param  {String} {token
 * @param  {String} post_id}
 * @description Unlike tweet
 */
export const unlikePost = async ({ token, id }) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const { data } = await axios.post(
      `${API_URL}/api/post/unlike`,
      { id },
      config
    );
    successAlert(data.message);
  } catch (err) {
    errorAlert(handleErrorMessage(err));
  }
};

/**
 * @param  {String} {token
 * @param  {String} public_id}
 * @description Delete post image
 */

export const deletePostImage = async (token, public_id) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const { data } = await axios.post(
      `${API_URL}/api/upload/delete`,
      { public_id },
      config
    );
    return data.message;
  } catch (err) {
    errorAlert(handleErrorMessage(err));
  }
};