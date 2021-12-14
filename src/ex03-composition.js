import React from "react";
export {WelcomeDialog}
export {SignUpDialog}

function FancyBorder(props) {
    console.log("props.children: " + props.children);
    return (
        <div className={'FancyBorder FancyBorder-'+ props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog() {
    return (
        <Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />
    );
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

// function App() {
//     return (
//         <SplitPane
//             left={<Contacts />}
//             right={<Chat />}
//         />
//     );
// }

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-content">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {login: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    render() {
        return (
            <Dialog title="Mars Exploration Program"
                    message="How should we refer to you?">
                <input value={this.state.login}
                       onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>
                    Sign Me Up!
                </button>
            </Dialog>
        );
    }

    handleChange(e) {
        this.setState({login: e.target.value});
    }

    handleSignUp(e) {
        alert(`Welcome aboard, ${this.state.login}!`);
    }

}