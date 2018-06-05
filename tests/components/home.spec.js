import React from 'react';
import Home from '../../src/components/Home.jsx';

test('renders the welcome message', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper).toMatchSnapshot();
});
