import './App.css';
import Main from './components/MainContainer';
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Main />
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
