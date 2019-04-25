import * as React from 'react';

import { Middleware, ReducersMapObject } from 'redux';

import { Provider } from 'react-redux';
import storeCreator from './storeCreator';

export interface ReactStoreProviderProps<S = any> {
  reducers: ReducersMapObject<S, any>;
  initialState?: S;
  middleWares?: Middleware<any, S, any>[];
}

const ReactStoreProvider: React.SFC<ReactStoreProviderProps<any>> = ({
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

export { storeCreator };
export default ReactStoreProvider;
