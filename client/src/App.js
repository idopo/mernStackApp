import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from "./Components/AppNavbar";
import ShoppingList from './Components/ShoppingList';
import ItemModal from './Components/ItemModal';
import {Container} from 'reactstrap';
import {Provider} from 'react-redux';
import store from './store'

class  App extends Component {
  render() { return(
    <Provider store={store}>
      <div className="App">
        <AppNavbar/>
        <Container className=".ml-3">
          <ItemModal/>
          <ShoppingList/>
        </Container>
      </div>
    </Provider>
  );
  }
}

export default App;
