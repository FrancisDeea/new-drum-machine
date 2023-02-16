const clips = {
    "Heater-1": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    "Heater-2": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    "Heater-3": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    "Heater-4": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    "Clap": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    "Open-HH": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    "Kick-n-Hat": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    "Kick": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    "Closed-HH": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
}

export const DrumPad = props => {
    return (
        <div id="pad-container">
            <button className="drum-pad" id="Heater-1">
                <span className="letter">Q</span>
                <audio
                    src={clips["Heater-1"]}
                    className="clip"
                    id="Q"
                />
            </button>
            <button className="drum-pad" id="Heater-2">
                <span className="letter">W</span>
                <audio
                    src={clips["Heater-2"]}
                    className="clip"
                    id="W"
                />
            </button>
            <button className="drum-pad" id="Heater-3">
                <span className="letter">E</span>
                <audio
                    src={clips["Heater-3"]}
                    className="clip"
                    id="E"
                />
            </button>
            <button className="drum-pad" id="Heater-4">
                <span className="letter">A</span>
                <audio
                    src={clips["Heater-4"]}
                    className="clip"
                    id="A"
                />
            </button>
            <button className="drum-pad" id="Clap">
                <span className="letter">S</span>
                <audio
                    src={clips["Clap"]}
                    className="clip"
                    id="S"
                />
            </button>
            <button className="drum-pad" id="Open-HH">
                <span className="letter">D</span>
                <audio
                    src={clips["Open-HH"]}
                    className="clip"
                    id="D"
                />
            </button>
            <button className="drum-pad" id="Kick-n-Hat">
                <span className="letter">Z</span>
                <audio
                    src={clips["Kick-n-Hat"]}
                    className="clip"
                    id="Z"
                />
            </button>
            <button className="drum-pad" id="Kick">
                <span className="letter">X</span>
                <audio
                    src={clips["Kick"]}
                    className="clip"
                    id="X"
                />
            </button>
            <button className="drum-pad" id="Closed-HH">
                <span className="letter">C</span>
                <audio
                    src={clips["Closed-HH"]}
                    className="clip"
                    id="C"
                />
            </button>
        </div>
    )
};

