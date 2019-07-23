import React from 'react';
import Products from './Products'
import Fruits from './Fruits'
import Vegetables from './Vegetables'
import './App.css';
import Collapsible from 'react-collapsible'


class App extends React.Component{
  render(){
    return <div>
      <h1 id="title">Welcome to Greens Kiosk</h1>
      <p>We sell fruits and vegetables</p>
      <h2>Products</h2>
      <ul id="products">
        <Collapsible trigger = "Click me"><Products/></Collapsible>
      </ul>
      <h3>Fruits</h3>
      <ul id="fruList">
        <Collapsible trigger = "Click me please"><Fruits/></Collapsible>
      </ul>
      <h3>Vegetables</h3>
      <ul  id="vegList">
       <Collapsible trigger = "veggies maybe"><Vegetables/> </Collapsible>

      </ul>
      
      
   </div>

  }
}

export default App;
