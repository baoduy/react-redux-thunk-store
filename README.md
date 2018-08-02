# React Redux Thunk Store

[![codecov](https://codecov.io/gh/baoduy/Js-Projects/branch/master/graph/badge.svg)](https://codecov.io/gh/baoduy/Js-Projects)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/react-redux-thunk-store.svg)
![npm (scoped)](https://img.shields.io/npm/v/react-redux-thunk-store.svg)
![npm](https://img.shields.io/npm/l/react-redux-thunk-store.svg)


To simplyfi the **redux store** creattion and management. I developed this library to help to create and manage the store easier and simpler.

It fully compatible with **redux tool for Chrome** to monitor the state in DEVELOPMENT mode.

## Sample:

```javascript
import React from "react";
import Provider from "react-redux-thunk-store";
import ReactDOM from "ReactDOM";

const reducer = (store = [], action) => {
  if (action.type === "LOADDED") return [{ id: 1 }];
  return store;
};

const component = renderer.create(
  <Provider reducers={{ value: reducer }}>
    <div>Hello Store</div>
  </Provider>
);

ReactDOM.render(
  <Provider reducers={{ value: reducer }}>
    <div>Hello Store</div>
  </Provider>,
  document.getElementById("root")
);
```

## Properties

### 1. reducers `Required`

This is required property which proviced an object contains all your reducers.

### 2. initialState `option`

Provide the initialState to the Redux store.

### 3. middleWares `option`

Provide the custom middle-wares to the Redux store.
