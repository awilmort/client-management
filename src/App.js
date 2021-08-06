import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Main />
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
