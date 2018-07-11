import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const electron = window.require('electron');
const fs = electron.remote.require('fs');
const ipcRenderer  = electron.ipcRenderer;

const StyledButton = styled(Button)`
  && {
    background: papayawhip;
    color: palevioletred;
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>MUI</Button>
        <StyledButton>Styled</StyledButton>
      </div>
    );
  }
}

export default App;
