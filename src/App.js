import React from 'react';
import './App.css';
import * as components from './components/export';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: ""
        }
        this.handleClick = this.handleClick.bind(this);
    }

    // add methods/hooks here
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
