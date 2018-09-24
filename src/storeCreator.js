import configureStore from './store';
import { combineReducers } from 'redux';
import PropTypes from 'prop-types';

const storeCreator = ({ reducers, initialState, middleWares }) => {
  const rootReducer = combineReducers(reducers);
  return configureStore(rootReducer, initialState, middleWares);
};

storeCreator.propTypes = {
  reducers: PropTypes.object.isRequired,
  initialState: PropTypes.object,
  middleWares: PropTypes.array
};

export default storeCreator;
