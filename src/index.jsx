import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import React from 'react';

export { default as storeCreator } from './storeCreator';

const ReactReduxThunkStore = ({
  reducers,
  initialState,
  middleWares,
  children,
  ...others
}) => {
  const store = storeCreator({ reducers, initialState, middleWares });
  return (
    <Provider store={store} {...others}>
      {children}
    </Provider>
  );
};

ReactReduxThunkStore.propTypes = {
  reducers: PropTypes.object.isRequired,
  initialState: PropTypes.object,
  middleWares: PropTypes.array,
  children: PropTypes.node.isRequired
};

export default ReactReduxThunkStore;
