import { combineReducers, createStore, applyMiddleware } from "redux";
import { categories } from "../_reducer/categories";
import { events } from "../_reducer/events";
import { pagecategories } from "../_reducer/pagecategories";
import { promise, logger } from "./middleware";

const rootReducers = combineReducers({
  categories,
  events,
  pagecategories
});

const store = createStore(rootReducers, applyMiddleware(promise, logger));

export default store;
