// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

//import BadgeNew from './pages/BadgeNew'
import Badges from './pages/Badges'
import './global.css'
import 'bootstrap/dist/css/bootstrap.css'

//const jsx = <h1>Hello, Platzi Badges!</h1>;
// const element = React.createElement('a',{href:'https://siu.isotools.org/'},'ir a isotools')

//const element = React.createElement

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badges/>, container);
