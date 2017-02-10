import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import render from 'react-test-renderer';

import Accordion from '../accordion';

const Content = () => (
  <div className="container1">
    <h1>This is a content title for accordion</h1>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore
       magna aliquyam erat, sed diam voluptua.
    </p>
  </div>
);

const defaultComponent = () => (
  <Accordion title="Dummy Accordion">
    <Content />
  </Accordion>
);

test('renders the default Accordion Component', (t) => {
  const accordionTree = render.create(defaultComponent()).toJSON();
  t.snapshot(accordionTree);
  const wrapper = shallow(defaultComponent());
  t.is(wrapper.instance().props.title, 'Dummy Accordion');
  t.is(wrapper.instance().props.alternateTitle, '');
  t.is(wrapper.instance().props.initialPanelState, false);
  t.is(wrapper.instance().state.open, false);
});

test('show the accordion content with alternative title when clicked', (t) => {
  const wrapper = shallow(
    <Accordion title="Dummy Accordion" alternateTitle="I am different" >
      <Content />
    </Accordion>
  );
  t.is(wrapper.instance().state.open, false);
  t.is(wrapper.instance().props.alternateTitle, 'I am different');
  wrapper.find('.title').simulate('click');
  t.is(wrapper.instance().state.open, true);
  t.is(wrapper.find('.title-text').text(), 'I am different');
});
