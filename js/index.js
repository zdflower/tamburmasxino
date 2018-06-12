var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var soundFilesNamesAndKeys = {
  Q: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  W: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  E: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  A: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  S: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  D: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  Z: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  X: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  C: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      currentSoundText: 'Nothing sounds right now',
      currentSound: ''
    };
    _this.handleClickPlay = _this.handleClickPlay.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.playSound = _this.playSound.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("keydown", this.handleKeyPress);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyPress);
    }
  }, {
    key: "playSound",
    value: function playSound() {
      var audio = new Audio(this.state.currentSound);
      audio.play();
    }
    /* Play audio with javascript
    http://stackoverflow.com/questions/9419263/ddg#18628124
    */

  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(event) {
      var currentSound = '';
      var currentSoundText = '';
      if (event.key === "q") {
        currentSound = soundFilesNamesAndKeys.Q;
        currentSoundText = soundFilesNamesAndKeys.Q;
      } else if (event.key === "w") {
        currentSound = soundFilesNamesAndKeys.W;
        currentSoundText = soundFilesNamesAndKeys.W;
      } else if (event.key === "e") {
        currentSound = soundFilesNamesAndKeys.E;
        currentSoundText = soundFilesNamesAndKeys.E;
      } else if (event.key === "a") {
        currentSound = soundFilesNamesAndKeys.A;
        currentSoundText = soundFilesNamesAndKeys.A;
      } else if (event.key === "s") {
        currentSound = soundFilesNamesAndKeys.S;
        currentSoundText = soundFilesNamesAndKeys.S;
      } else if (event.key === "d") {
        currentSound = soundFilesNamesAndKeys.D;
        currentSoundText = soundFilesNamesAndKeys.D;
      } else if (event.key === "z") {
        currentSound = soundFilesNamesAndKeys.Z;
        currentSoundText = soundFilesNamesAndKeys.Z;
      } else if (event.key === "x") {
        currentSound = soundFilesNamesAndKeys.X;
        currentSoundText = soundFilesNamesAndKeys.X;
      } else if (event.key === "c") {
        currentSound = soundFilesNamesAndKeys.C;
        currentSoundText = soundFilesNamesAndKeys.C;
      } else {
        currentSoundText = "That key has no assigned sound.";
        currentSound = '';
      }
      this.setState({
        currentSound: currentSound,
        currentSoundText: currentSoundText
      });
    }
  }, {
    key: "handleClickPlay",
    value: function handleClickPlay(event) {
      /* click event handler */
      var drumPadChildren = event.target.children;
      var source = drumPadChildren[0].getAttribute("src");
      // let text = `${source}`
      //console.log(source);
      this.setState({
        currentSoundText: source,
        currentSound: source
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { id: "drum-machine" },
        React.createElement(Display, { currentSoundText: this.state.currentSoundText }),
        React.createElement(
          "div",
          { id: "container" },
          Object.keys(soundFilesNamesAndKeys).map(function (key) {
            return React.createElement(DrumPad, {
              name: key,
              soundFile: soundFilesNamesAndKeys[key],
              clickplayer: _this2.handleClickPlay,
              key: key
            });
          })
        ),
        this.state.currentSound ? this.playSound() : ''
      );
    }
  }]);

  return App;
}(React.Component);

function Display(props) {
  return React.createElement(
    "div",
    { id: "display" },
    props.currentSoundText
  );
}

function DrumPad(props) {
  return React.createElement(
    "div",
    { className: "drum-pad", id: props.soundFile, onClick: props.clickplayer },
    props.name,
    React.createElement("audio", { className: "clip", id: props.name, src: props.soundFile, type: "audio/mp3" })
  );
}

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));