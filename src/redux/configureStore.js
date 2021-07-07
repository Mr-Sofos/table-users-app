import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import users from "./../redux/ducks/users";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  users,
});

const preloadedState = JSON.parse(localStorage.getItem("users"));

const store = createStore(
  rootReducer,
  preloadedState ? preloadedState : undefined,
  applyMiddleware(thunk, logger)
);

store.subscribe(() => {
  localStorage.setItem(
    "users",
    JSON.stringify({
      users: store.getState().users,
    })
  );
});

export default store;
