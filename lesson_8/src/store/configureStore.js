/**
 * Импортируемая функця createStore принимает
 * один обязательный аргумент (функция reducer),
 * и два необязательных - начальное состояние
 * (state) и "усилители".
 * 
 * "Усилители" - это middleware функции.
 * Типичный усилитель - логгер (logger), который
 * просто пишет в консоль все что происходит
 * с наблюдаемым объектом.
 */
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);
