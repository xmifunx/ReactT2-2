import React from 'react';
import Store from './components/Store/store.jsx'
import {products} from './components/Data/data.js'
import './App.css';

class App extends React.Component {
  render() {
    return <Store products={products}/>
  }
};

export default App;
