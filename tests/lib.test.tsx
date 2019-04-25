import * as React from 'react';

import Provider, { storeCreator } from '../lib';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { create } from 'react-test-renderer';

let called = false;

const action = () => d => {
  called = true;
  d({ type: 'LOADDED' });
};

const reducer = (store = [], action) => {
  if (action.type === 'LOADDED') return [{ id: 1 }];
  return store;
};

const Comsumer = connect(
  s => ({ value: s }),
  d => ({
    action: bindActionCreators(action, d)
  })
)((props: any) => {
  if (!called) props.action();
  console.log(props.value);
  return <div>{props.value && props.value[0]}</div>;
});

const component = create(
  <Provider reducers={{ value: reducer }}>
    <Comsumer />
  </Provider>
);

test('can render without issues in DEV', () => {
  const cs = component.toJSON();
  expect(cs).toMatchSnapshot();
});

test('storeCreator is defined', () => {
  expect(storeCreator).toBeDefined();
});
