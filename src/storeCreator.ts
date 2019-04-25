import { Middleware, ReducersMapObject, combineReducers } from 'redux';

import creator from './store';

export interface StoreCreatorProps<S> {
  reducers: ReducersMapObject<S, any>;
  initialState?: S;
  middleWares?: Middleware<any, S, any>[];
}

const storeCreator = <S>({
  reducers,
  initialState,
  middleWares
}: StoreCreatorProps<S>) => {
  const rootReducer = combineReducers(reducers);
  return creator(rootReducer, initialState, middleWares);
};

export default storeCreator;
