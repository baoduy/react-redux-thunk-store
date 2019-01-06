import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import React from 'react';
import storeCreator from './storeCreator';

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

export { storeCreator };
export default ReactReduxThunkStore;
