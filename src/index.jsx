import React from 'react';
import ReactDOM from 'react-dom';
import Forms from './components/Forms'
import Buttons from 'components/Buttons'
import Navbar from 'components/Navbar';
import CheckBox from 'components/CheckBox';
import Cards from 'components/Cards';
import Alerts from 'components/Alerts';
import DropdownMenu from 'components/DropdownMenus';

import 'styles/font.scss'


const App = () => {
  return <>
    <Navbar />
    <DropdownMenu />
    <Buttons />
    <CheckBox />
    <Alerts />
    <Forms />
    <Cards />
  </>

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

