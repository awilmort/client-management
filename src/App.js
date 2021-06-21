import React from 'react';
import './App.css';
import TestComponent from './TestComponent/TestComponent';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {


    fetch('http://localhost:4002/enterprise').then(res => {
      //console.log('--- Enterprise : ', res);
      if (res.ok) {
        return res.json();
      } else {
        return res.text().then(text => {throw new Error(text)})
      }
    }).then(res => {
      //console.log('--- Enterprise then: ', res);
      this.setState({data: res});
    }).catch(err => {
      console.log('--- Enterprise catch: ', err);
    });

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
