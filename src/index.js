import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import cartoon from './images/cartoon.jpg'

const App = () => {
  return (
    <div>
      <h1>Hello Mario + Lugi World!!!</h1>
      <img src={cartoon} width="500" alt="Cartoon Image" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
