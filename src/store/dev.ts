import { Middleware, Reducer, applyMiddleware, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default <S = any>(
  rootReducer: Reducer<S>,
  initialState?: S,
  middleWares: Middleware<any, S, any>[] = []
) =>
  createStore(
    rootReducer,
    initialState || {},
    composeWithDevTools(
      applyMiddleware(thunk, reduxImmutableStateInvariant(), ...middleWares)
    )
  );
