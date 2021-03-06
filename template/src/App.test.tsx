import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import CardButton from "./components/templates/CardButton";
configure({ adapter: new Adapter() });

const wrapper = shallow(<CardButton  loading name="helpdesk" onClick={() => {}}/>);

test('Render App', () => {
  console.log("DEBUG:(" + wrapper.text() + ")")
  expect(wrapper.text()).toEqual('Helpdesk UserRead only access to all information. ')
});
