import React from 'react';
import './App.css';
import * as components from './components/export';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: "",
            isPressed: false
        }
        this.playSound = this.playSound.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.activateStyle = this.activateStyle.bind(this);
    }

    // add methods/hooks here
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress)
    }

    componentWillUnmount() {
        document.addEventListener("keydown", this.handleKeyPress)
    }

    activateStyle(sample) {
        const button = document.getElementById(sample);
        const pressed = "box-shadow: none; transform: translate(2px, 2px) scale(0.9); transition: all 0.2s"
        const notPressed = "boxShadow: 1.5px 2px 1px rgb(255, 255, 255); transform: none; transition: all 0.1s"
        button.style.cssText = pressed;
        setTimeout(() => {
            button.style.cssText = notPressed;
        }, 150)
    }

    handleKeyPress(e) {
        const audio = document.getElementById(e.key.toUpperCase());
        if (audio !== null) {this.playSound(audio)}
    }

    playSound(e) {
        let sample = "";
        if (e.className === 'clip') {
            e.play();
            e.currentTime = 0;
            sample = e.parentNode.id;
        } else {
            sample = e.target.id;
            const audio = e.target.lastChild;
            audio.play();
            audio.currentTime = 0;
        }
        this.setState({
            display: sample
        })
        this.activateStyle(sample);
    }

    render() {
        return (
            <div id="drum-machine">
                <components.Display clipName={this.state.display} />
                <components.DrumPad handleClick={this.playSound} />
            </div>
        )
    }
}

export default App;
