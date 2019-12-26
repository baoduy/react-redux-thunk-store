# React Redux Thunk Store

![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/react-redux-thunk-store.svg)
![publishsize](https://badgen.net/packagephobia/publish/react-redux-thunk-store)
[![CircleCI](https://circleci.com/gh/baoduy/react-redux-thunk-store.svg?style=svg)](https://circleci.com/gh/baoduy/react-redux-thunk-store)
[![codecov](https://codecov.io/gh/baoduy/react-redux-thunk-store/branch/develop/graph/badge.svg)](https://codecov.io/gh/baoduy/react-redux-thunk-store)
![npm (scoped)](https://img.shields.io/npm/v/react-redux-thunk-store.svg)
![npm](https://img.shields.io/npm/l/react-redux-thunk-store.svg)
[![Open Source Helpers](https://www.codetriage.com/baoduy/react-redux-thunk-store/badges/users.svg)](https://www.codetriage.com/baoduy/react-redux-thunk-store)
[![PeerDependencies](https://img.shields.io/david/peer/baoduy/react-redux-thunk-store.svg)](https://david-dm.org/baoduy/react-redux-thunk-store?type=peer)
[![Dependencies](https://img.shields.io/david/baoduy/react-redux-thunk-store.svg)](https://david-dm.org/baoduy/react-redux-thunk-store)
[![DevDependencies](https://img.shields.io/david/dev/baoduy/react-redux-thunk-store.svg)](https://david-dm.org/baoduy/react-redux-thunk-store?type=develop)

**Archived as the [reduxjs / redux-toolkit](https://github.com/reduxjs/redux-toolkit)**

To simplyfy the **redux store** creattion and management. I developed this library to help to create and manage the store easier and simpler.

It fully compatible with **redux tool for Chrome** to monitor the state in DEVELOPMENT mode.

## Installation
```cmd
mpn install --save-dev  redux-devtools-extension redux-immutable-state-invariant
npm install --save-dev react-redux-thunk-store
```

## Sample:

```javascript
import React from "react";
import Provider from "react-redux-thunk-store";
import ReactDOM from "ReactDOM";

const reducer = (store = [], action) => {
  //This is sample reducer
  if (action.type === "LOADDED") return [{ id: 1 }];
  return store;
};

const rootRecuders ={
  values:reducer,
  others:otherReducer,
  ...
}

ReactDOM.render(
  <Provider reducers={rootRecuders}>
    <div>Hello Store</div>
  </Provider>,
  document.getElementById("root")
);
```

## NextJs Support

Beow is the sample code if you using NextJs.

```javascript
import withRedux from 'next-redux-wrapper';
import createStore from 'react-redux-thunk-store/storeCreator';
//Using the react-redux Provider
import { Provider } from 'react-redux';
//Your reducers but not combineReducers
import reducers from './reducers';

const makeStore = () => createStore(reducers, initialState);

export default withRedux(makeStore)(
  class extends App {
    render() {
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>;
    }
  }
);
```

## Properties

### 1. reducers `Required`

This is required property which proviced an object contains all your reducers.

### 2. initialState `option`

Provide the initialState to the Redux store.

### 3. middleWares `option`

Provide the custom middle-wares to the Redux store.
