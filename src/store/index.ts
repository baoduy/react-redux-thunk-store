import { Middleware, Reducer } from 'redux';

const creator =
  process.env.NODE_ENV && process.env.NODE_ENV === 'development'
    ? require('./dev').default
    : require('./prd').default;

export default <S = any>(
  rootReducer: Reducer<S>,
  initialState?: S,
  middleWares: Middleware<any, S, any>[] = []
) => creator(rootReducer, initialState, middleWares);
