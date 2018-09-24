import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import storeCreator from './storeCreator';

const ReactReduxThunkStore = ({
  reducers,
  initialState,
  middleWares,
  ...others
}) => {
  const store = storeCreator({ reducers, initialState, middleWares });
  return <Provider store={store} {...others} />;
};

ReactReduxThunkStore.propTypes = {
  reducers: PropTypes.object.isRequired,
  initialState: PropTypes.object,
  middleWares: PropTypes.array
};

export default ReactReduxThunkStore;
