import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent"
import TodoItem from './components/TodoItem';
import Joke from './components/Joke';
import jokesData from './jokesData';
import productsData from './vschoolProducts'
import Product from './components/Product';

function App() {

  const productComponenets = productsData.map(item => <Product key={item.id} product={item} />)
  return(
    <div>
        {productComponenets}
    </div>
  )
}

export default App;
