import { Middleware, Reducer } from 'redux';

const creator =
  process.env.NODE_ENV === 'production'
    ? require('./prd').default
    : require('./dev').default;

export default <S = any>(
  rootReducer: Reducer<S>,
  initialState?: S,
  middleWares: Middleware<any, S, any>[] = []
) => creator(rootReducer, initialState, middleWares);
