import React from 'react';

// import logo from './logo.svg';
import './App.css';
// import TodoItem from './components/TodoItem';
import Header from './components/header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import MenuIcon from './components/MenuIcon/MenuIcon';
import home from './components/MenuIcon/image/home.png';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoItem/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header/>
      <LoginForm/>
      <div className="icon">
        <MenuIcon icon="fas fa-home fa-3x" label="Home"/>
        <MenuIcon icon="fas fa-gift fa-3x" label="Deals"/>
        <MenuIcon icon="fas fa-upload fa-3x" label="Upload"/>
        <MenuIcon icon="fas fa-mug-hot fa-3x" label="Work"/>
        <MenuIcon icon="fas fa-cog fa-3x" label="Work"/>
      </div>
      {/* <FontAwesomeIcon icon={faHome} /> */}
    </div>
  );
}

export default App;
