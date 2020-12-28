import './App.css';
import Main from './components/MainContainer';
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { configureStore } from "./redux/configureStore";


const store = configureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Main />
        </div>
        </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
