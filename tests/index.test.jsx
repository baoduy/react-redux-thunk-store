import React from "react";
import renderer from "react-test-renderer";
import Provider from "../lib";

const reducer = (store = [], action) => {
  if (action.type === "LOADDED") return [{ id: 1 }];
  return store;
};

const component = renderer.create(
  <Provider reducers={{ value: reducer }}>
    <div>Hello Store for PRD</div>
  </Provider>
);

it("can render without issues in DEV", () => {
  console.debug("NODE_ENV", process.env.NODE_ENV);
  const cs = component.toJSON();
  console.debug(cs);

  expect(cs).toMatchSnapshot();
});
