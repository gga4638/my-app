import React from 'react';
import ReactDOM from 'react-dom';
export { Hello }

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
            date: new Date(),
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
            <Blog posts={posts} />
            <NumberList numbers={numbers} />
            <ul>{listItems}</ul>
            <Page />
            <Mailbox unreadMessages = {messages} />
            <LoginControl />
            <GreetingButton /> <br></br>
            <Toggle />
            <h1 className='greeting'>Hello, {getGreeting(user)} {1+2}</h1>
            <h2>Good to see you here.</h2>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
            <Clock />
            {csImg}
        </div>
        
    );
}

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

function Comment(props) {
    return (
        <div className='Comment'>
            <UserInfo user={props.author} />
            <div className='Comment-text'>
                {props.text}
            </div>
            <div className='Comment-date'>
                {FormData(props.date)}
                {/* {formatDate(props.date)} error: formatDate not defined */}

            </div>
        </div>
    );
}

function Avatar(props) {
    return (
        <img className='Avatar' 
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className='UserInfo'>
            <Avatar user={props.user} />
            <div className='UserInfo-name'>
                {props.author.name}
            </div>
        </div>
    );
}

function sum(a, b) {
    return a + b;
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

function UserGreeting() {
    return <span> Welcom back!</span>;
}

function GuestGreeting() {
    return <span> Please sign up.</span>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

class GreetingButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isLoggedIn: !prevState.isLoggedIn,
        }));
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick}>
                    {this.state.isLoggedIn ? '환영합니다' : '회원가입'}
                </button>
                <Greeting isLoggedIn={this.state.isLoggedIn} />
            </>
        );
    }
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if(isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                {button}
                <Greeting isLoggedIn={isLoggedIn} />
                The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
            </div>
        );
    }
}

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    const count = 1;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messages.
                </h2>
            }
            { count && <h1>Messages: {count}</h1> }
            {0}
        </div>
    );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

function WarningBanner(props) {
    if(!props.warn) {
        return null;
    }

    return (
        <div className='warning'>
            Warning!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

const numbers = [1, 2, 3, 4, 5];
const double = numbers.map(number => number * 2);
console.log(double);
const listItems = numbers.map(number =>
    <li>{number}</li>
);

function ListItem(props) {
    return (
        <li key={props.value.toString()}>{props.value}?</li>
    );
}

function NumberList(props) {
    const numbers = props.numbers;

    return (
        <ul>
            {numbers.map((number, index) =>
                // <li key={index}>{number} : index-{index}</li>
                <ListItem key={number.toString()} 
                          value={number} />
            )}
        </ul>
    );
}

function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map(post => 
                <li key={post.id} id={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );

    const content = props.posts.map(post =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>    
    );

    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React form npm.'}
];

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {

    }

    handleChange(event) {
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <lable>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </lable>
                <inpiut type="submit" value="Submit" />
            </form>
        );
    }
}