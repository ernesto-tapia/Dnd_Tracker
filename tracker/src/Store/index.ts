import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";

const reducer = combineReducers(reducers);
export type IState = ReturnType<typeof reducer>;

export default () => {
  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();
  const middleware = applyMiddleware(sagaMiddleware);
  const store = createStore(reducer, composeEnhancers(middleware));

  return store;
};
