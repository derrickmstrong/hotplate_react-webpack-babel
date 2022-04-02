import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from 'styled-components'

const App = () => {
  return (
    <Block>
      Hello World!
    </Block>
  );
};

const Block = styled.div`
  background-color: green;
  color: ${({ color }) => color || 'blue'};
  padding: 10px;
  border: 1px solid ${({ color }) => color || 'blue'};
  display: inline-block;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
