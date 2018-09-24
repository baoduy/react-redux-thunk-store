"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _store = _interopRequireDefault(require("./store"));

var _redux = require("redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var storeCreator = function storeCreator(_ref) {
  var reducers = _ref.reducers,
      initialState = _ref.initialState,
      middleWares = _ref.middleWares;
  var rootReducer = (0, _redux.combineReducers)(reducers);
  return (0, _store.default)(rootReducer, initialState, middleWares);
};

storeCreator.propTypes = {
  reducers: _propTypes.default.object.isRequired,
  initialState: _propTypes.default.object,
  middleWares: _propTypes.default.array
};
var _default = storeCreator;
exports.default = _default;