import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const assignment = (
    <div>
        <body> 
        <head>
  <title>Greens Kiosk</title>
</head>
<body>
  <h1 id="title">Welcome to Greens Kiosk</h1>
  <p>We sell fruits and vegetables</p>
  <h3>Fruits</h3>
  <ul id="fruList">
    <li>Mangoes</li>
    <li>Bananas</li>
    <li>Water Melons</li>
  </ul>
  <h3>Vegetables</h3>
  <ul id="vegList">
    <li>Onions</li>
    <li>Tomatoes</li>
    <li>Kales</li>
  </ul>
</body>

        </body>
        
    </div>
)


ReactDOM.render(assignment, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
