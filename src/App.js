import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './TestComponent/TestComponent';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {


    fetch('http://localhost:4002/enterprise').then(res => {
      console.log('--- Enterprise : ', res);
      if (res.ok) {
        return res.json();
      } else {
        return res.text().then(text => {throw new Error(text)})
      }
    }).then(res => {
      console.log('--- Enterprise then: ', res);
      this.setState({data: res});
    }).catch(err => {
      console.log('--- Enterprise catch: ', err);
    });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
          <TestComponent data={this.state.data}/>
        </header>
      </div>
    );
  }
}

export default App;
