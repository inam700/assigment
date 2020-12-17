import { GET_POST, GET_POSTS, ADD_POSTS, DELETE_POST } from "../types";

const initialState = {
  posts: [],
  post: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case ADD_POSTS:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };

    default:
      return state;
  }
}
