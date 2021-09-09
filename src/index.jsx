import React from 'react';
import ReactDOM from 'react-dom';
import Forms from './components/Forms'
import Buttons from 'components/Buttons'
import Navbar from 'components/Navbar';
import CheckBox from 'components/CheckBox';
import 'styles/font.scss'
import DropdownMenu from 'components/DropdownMenus';


const App = () => {
  return <>
    <Navbar/>
    <DropdownMenu/>
    <Buttons/>
    <CheckBox/>
    <Forms />
  </>

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

