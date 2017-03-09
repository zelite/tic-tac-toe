import React from 'react';
import { shallow } from 'enzyme';
import StartMenu from './StartMenu.js';


it('renders without crashing', () => {
  shallow(<StartMenu />);
});