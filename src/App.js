import React from 'react';
import './App.css';
import * as components from './components/export';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleClick = this.handleClick.bind(this);
    }

    // add methods/hooks here
    handleClick(event) {
        const audio = event.target.lastChild;
        audio.currentTime = 0;
        audio.play();
    }

    render() {
        return (
            <div>
                <components.Display />
                <components.DrumPad handleClick={this.handleClick} />
            </div>
        )
    }
}

export default App;
