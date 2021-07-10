import config from "../config";
import TokenService from "./token-service";

const BlogApiService = {
  getPosts() {
    return fetch(`${config.API_ENDPOINT}/posts`, {
      headers: {
        "content-type": "application/json",
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  makePost(newPost) {
    return fetch(`${config.API_ENDPOINT}/posts`, {
      method: "POST",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(newPost),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  patchPattern(post_id, updatedData) {
    return fetch(`${config.API_ENDPOINT}/posts/${post_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(updatedData),
    }).then((res) => (!res.ok ? res.json().then((e) => Promise.reject(e)) : 1));
  },
  deletePost(post_id) {
    return fetch(`${config.API_ENDPOINT}/posts/${post_id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) => (!res.ok ? res.json().then((e) => Promise.reject(e)) : 1));
  },
};

export default BlogApiService;
