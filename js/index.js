var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var URL = "https://s3.amazonaws.com/freecodecamp/drums/";
var SOUNDFILE_NAMES_AND_KEYS = {
  Q: "Heater-1",
  W: "Kick_n_Hat",
  E: "Chord_1",
  A: "Heater-6",
  S: "punchy_kick_1",
  D: "Brk_Snr",
  Z: "Dry_Ohh",
  X: "Heater-3",
  C: "Dsc_Oh"

  // This is to pass the last test.
};var KEYCODES = {
  81: 'Q',
  87: 'W',
  69: 'E',
  65: 'A',
  83: 'S',
  68: 'D',
  90: 'Z',
  88: 'X',
  67: 'C'
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      currentSoundText: 'Nothing sounds right now',
      currentSoundId: ''
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
      document.getElementById(this.state.currentSoundId).play();
    }

    /* Play audio with javascript
    http://stackoverflow.com/questions/9419263/ddg#18628124
    
    The Joy of HTML5 Audio: Tips & Tricks for Easy Sound Embedding
    https://www.elated.com/articles/html5-audio/
    */

  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(event) {

      // const key = event.key.toUpperCase();

      var key = KEYCODES[event.keyCode]; // this is to pass the last test.
      /* 
      Here: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode 
      says that *keyCode* is deprecated and to avoid using it. 
      And here: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
      it is recommended to use *key* instead.
      */

      var isValidKey = Object.keys(SOUNDFILE_NAMES_AND_KEYS).includes(key);

      var currentSoundText = "That key has no assigned sound.";
      var currentSoundId = '';

      if (isValidKey) {
        currentSoundText = "Now you are hearing " + SOUNDFILE_NAMES_AND_KEYS[key];
        currentSoundId = key;
      }

      this.setState({
        currentSoundText: currentSoundText,
        currentSoundId: currentSoundId
      });
    }
  }, {
    key: "handleClickPlay",
    value: function handleClickPlay(event) {

      var key = event.target.children[0].id;

      this.setState({
        currentSoundText: "Now you are hearing " + SOUNDFILE_NAMES_AND_KEYS[key],
        currentSoundId: key
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
          Object.keys(SOUNDFILE_NAMES_AND_KEYS).map(function (key) {
            return React.createElement(DrumPad, {
              name: key,
              soundFile: URL + SOUNDFILE_NAMES_AND_KEYS[key] + ".mp3",
              clickplayer: _this2.handleClickPlay,
              key: key
            });
          })
        ),
        this.state.currentSoundId ? this.playSound() : ''
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