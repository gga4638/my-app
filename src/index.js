import ReactDOM from 'react-dom';
import './index.css';
import { Game } from './tictactoe.js'
import { Hello } from './ex01.js'

//const element = (<><Game /><Hello /></>);

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );


const element = (<Hello />);
ReactDOM.render(
  element,
  document.getElementById('mydiv')
);