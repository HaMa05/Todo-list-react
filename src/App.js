import React from 'react';

// import logo from './logo.svg';
import './App.css';
// import TodoItem from './components/TodoItem';
import Header from './components/header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import TabMenu from './components/TabMenu/TabMenu';

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
        <TabMenu icon="fas fa-home fa-3x" label="Home"/>
        <TabMenu icon="fas fa-gift fa-3x" label="Deals"/>
        <TabMenu icon="fas fa-upload fa-3x" label="Upload"/>
        <TabMenu icon="fas fa-mug-hot fa-3x" label="Work"/>
        <TabMenu icon="fas fa-cog fa-3x" label="Work"/>
      </div>
      {/* <FontAwesomeIcon icon={faHome} /> */}
    </div>
  );
}

export default App;
