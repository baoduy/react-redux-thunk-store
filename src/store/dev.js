import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore(rootReducer, initialState, middleWares) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk, reduxImmutableStateInvariant(), ...middleWares)
    )
  );
}
