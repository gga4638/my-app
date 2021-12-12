import React from 'react';
import ReactDOM from 'react-dom';
export {Hello}

//const user = "";
const user = {
    firstName: '춘식',
    lastName: '이',
    avatarUrl: '/image/cs01.jpg',
};

function formatName(user) {
    return user.firstName + user.lastName;
}

function getGreeting(user) {
    if(user) {
        return formatName(user) + "!";
    }
    return "Stranger.";
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date,
        });
    }

    render() {
        return (
            <h3>It is {this.state.date.toLocaleTimeString()}.</h3>
        );
    }
}

const csImg = <img src ={user.avatarUrl} />

function Hello() {
    return (
        <div>
            <h1 className='greeting'>Hello, {getGreeting(user)} {1+2}</h1>
            <h2>Good to see you here.</h2>
            <div id="clock"></div>
            {csImg}
        </div>
        
    );
}


const element = (<Clock />);
    
ReactDOM.render(
      element,
      document.getElementById('clock')
);
