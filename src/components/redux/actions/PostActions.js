import { GET_POST, GET_POSTS, ADD_POSTS, DELETE_POST } from "../types";
import axios from "axios";

export const getPosts = () => async (dispatch) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  dispatch({
    type: GET_POSTS,
    payload: res.data,
  });
};

export const getPost = (id) => async (dispatch) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  dispatch({
    type: GET_POST,
    payload: res.data,
  });
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3001/api/v1/contacts/${id}`);
    dispatch({
      type: DELETE_POST,
      payload: id,
    });
  } catch (e) {
    dispatch({
      type: DELETE_POST,
      payload: id,
    });
  }
};

export const addPost = (post) => async (dispatch) => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    post
  );
  dispatch({
    type: ADD_POSTS,
    payload: res.data,
  });
};
