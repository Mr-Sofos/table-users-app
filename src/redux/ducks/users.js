import { sortNamesAlphabetically } from "../../utils/helpers";

const initialState = {
  users: [],
  value: "",
  filter: "",
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "users/load/started":
      return {
        ...state,
        loading: true,
      };
    case "users/load/succeed":
      return {
        ...state,
        users: action.payload,
        totalCount: action.payload,
        loading: false,
      };
    case "get/value":
      return {
        ...state,
        value: action.payload,
      };
    case "get/search-value":
      return {
        ...state,
        filter: action.payload,
      };
    case "users/delete/succeed":
      return {
        ...state,
        users: state.users.filter((user) => user.login.uuid !== action.payload),
      };
    case "users/set-sortName":
      return {
        ...state,
        users: action.payload.sortUsers,
      };

    case "set/current/page":
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
}

// actions
export const deleteUser = (id) => {
  return { type: "users/delete/succeed", payload: id };
};

export const getValue = (value) => {
  return { type: "get/value", payload: value };
};

export const searchValue = (value) => {
  return { type: "get/search-value", payload: value };
};

export const sortName = () => {
  return (dispatch, getState) => {
    const { users } = getState().users;
    dispatch({
      type: "users/set-sortName",
      payload: {
        sortUsers: sortNamesAlphabetically(users),
      },
    });
  };
};

// thunks
export const loadUsers = (value) => (dispatch) => {
  dispatch({ type: "users/load/started" });

  fetch(`https://api.randomuser.me/?results=${value}`)
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: "users/load/succeed",
        payload: json.results,
      });
    });
};
