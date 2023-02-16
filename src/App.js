import React from 'react';
import './App.css';
import * as components from './components/export';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // add methods/hooks here


    render() {
        return (
            <div>
                <components.Display />
                <components.DrumPad />
            </div>
        )
    }
}

export default App;
