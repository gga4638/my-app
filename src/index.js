import ReactDOM from 'react-dom';
import './index.css';
import { Game } from './tictactoe.js'
import { Hello } from './ex01.js'
import { Calculator } from './ex02-lifting-state-up';
import { WelcomeDialog } from './ex03-composition';
import { SignUpDialog } from './ex03-composition';

//const element = (<><Game /><Hello /></>);

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );


// const element = (<Hello />);
// ReactDOM.render(
//   element,
//   document.getElementById('mydiv')
// );
  

// ReactDOM.render(<input value="hi" />, document.getElementById('root'));

// setTimeout(function() {
//   ReactDOM.render(<input value={null} />, document.getElementById('root'));
// }, 1000);


// const element = (<Calculator />);
// ReactDOM.render(
//   element,
//   document.getElementById('mydiv')
// );

const element = (<SignUpDialog />);
ReactDOM.render(
  element,
  document.getElementById('mydiv')
);