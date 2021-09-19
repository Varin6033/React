import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent"

function App() {
  const date = new Date(2018, 6, 31, 15)
  const hours = date.getHours()
  let timeOfDay
  const styles = {
    fontSize: 40
  }

  if(hours < 12) {
    timeOfDay = "morning"
    styles.color = "black"
  } else if(hours >= 12 && hours < 17){
    timeOfDay = "afternoon"
    styles.color = "blue"
  } else {
    timeOfDay = "night"
    styles.color = "red"
  }

  

  return (
    <h1 style={styles}>Good {timeOfDay}</h1>
  );
}

export default App;
