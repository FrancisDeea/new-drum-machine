import React from 'react';
import './App.css';
import * as components from './components/export';

const pressedStyle = {
    boxShadow: "none",
    transform: "translate(2px, 2px) scale(0.9)"
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: "",
            isPressed: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    // add methods/hooks here
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress)
    }

    componentWillUnmount() {
        document.addEventListener("keydown", this.handleKeyPress)
    }
    handleKeyPress(event) {
        const letter = event.key.toUpperCase();
        const audio = document.getElementById(letter);
        if (audio != null) {
            const sample = audio.parentElement.id;
            this.setState({
                display: sample
            })
            audio.currentTime = 0;
            audio.play()
        }
    }

    handleClick(event) {
        // set sample name as <display> state to show off itself when its playing
        const sample = event.target.id;
        this.setState({
            display: sample
        })
        // set function to play sounds when button is clicked
        const audio = event.target.lastChild;
        audio.currentTime = 0;
        audio.play();
    }

    render() {
        return (
            <div id="drum-machine">
                <components.Display clipName={this.state.display} />
                <components.DrumPad handleClick={this.handleClick} />
            </div>
        )
    }
}

export default App;
