import React from 'react';
import Home from '../../src/components/Home.jsx';
import { Link } from 'react-router-dom';
import Sample from '../../src/components/Sample.jsx';

test('renders the welcome message', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper).toMatchSnapshot();
});

test('page is routed to sample on click', () => {
    const sampleWrapper = shallow(<Sample />);
    const homeWrapper = shallow(<Home/>);
    homeWrapper.find(Link).simulate('click');
    expect(sampleWrapper).toMatchSnapshot();
})
