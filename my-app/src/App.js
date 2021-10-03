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
import todosData from './todosData';

function App() {

  const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)
  return (
    <div className="todo-list">
      {todoItems}
    </div>
)
}

export default App;
