import React from 'react';
import ReactDOM from 'react-dom';
import Forms from './components/Forms'
import Buttons from 'components/Buttons'


const App = () => {
  return <>
    <Buttons/>
    <Forms />
  </>

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

