import { Middleware, Reducer, applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';

export default <S = any>(
  rootReducer: Reducer<S>,
  initialState?: S,
  middleWares: Middleware<any, S, any>[] = []
) =>
  createStore(
    rootReducer,
    initialState || {},
    applyMiddleware(thunk, ...middleWares)
  );
