import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import configureStore from "./store";
import { combineReducers } from "redux";

const ReactReduxThunkStore = ({
  reducers,
  initialState,
  middleWares,
  ...others
}) => {
  const rootReducer = combineReducers(reducers);
  const store = configureStore(
    rootReducer,
    initialState || {},
    middleWares || []
  );
  return <Provider store={store} {...others} />;
};

ReactReduxThunkStore.propTypes = {
  reducers: PropTypes.object.isRequired,
  initialState: PropTypes.object,
  middleWares: PropTypes.array
};

export default ReactReduxThunkStore;
