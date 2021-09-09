import React from 'react';
import ReactDOM from 'react-dom';
import Forms from './components/Forms'
import Buttons from 'components/Buttons'
import Navbar from 'components/Navbar';
import ToggleButtons from 'components/ToggleButtons';


const App = () => {
  return <>
    <Navbar/>
    <Buttons/>
    <ToggleButtons/>
    <Forms />
  </>

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

