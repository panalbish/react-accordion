import React from 'react';
import { mount } from 'enzyme';
import { expect, test } from '@jest/globals';

import Accordion from '../../accordion';

const Content = () => (
  <div className="container1">
    <h1>This is a content title for accordion</h1>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua.
    </p>
  </div>
);

const defaultComponent = () => (
  <Accordion title="Dummy Accordion">
    <Content />
  </Accordion>
);

test('renders the default Accordion Component', () => {
  const wrapper = mount(defaultComponent());
  expect(wrapper).toMatchSnapshot();
});

test('show the accordion content with alternative title when clicked', () => {
  const wrapper = mount(
    <Accordion title="Dummy Accordion" alternateTitle="I am different">
      <Content />
    </Accordion>
  );
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('.title-text').text()).toBe('Dummy Accordion');
  wrapper.find('.title').simulate('click');
  expect(wrapper.find('.title-text').text()).toBe('I am different');
});
