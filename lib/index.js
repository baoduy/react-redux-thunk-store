"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _storeCreator = _interopRequireDefault(require("./storeCreator"));

var ReactReduxThunkStore = function ReactReduxThunkStore(_ref) {
  var reducers = _ref.reducers,
      initialState = _ref.initialState,
      middleWares = _ref.middleWares,
      others = (0, _objectWithoutProperties2.default)(_ref, ["reducers", "initialState", "middleWares"]);
  var store = (0, _storeCreator.default)({
    reducers: reducers,
    initialState: initialState,
    middleWares: middleWares
  });
  return _react.default.createElement(_reactRedux.Provider, (0, _extends2.default)({
    store: store
  }, others));
};

ReactReduxThunkStore.propTypes = {
  reducers: _propTypes.default.object.isRequired,
  initialState: _propTypes.default.object,
  middleWares: _propTypes.default.array
};
var _default = ReactReduxThunkStore;
exports.default = _default;