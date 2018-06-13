# Tamburmasxino
Drum machine project for Free Code Camp

The code in this branch (**lessRepetition**) and [here](https://codepen.io/zdflower/pen/zaZRrJ) now works and passes the tests.

Thanks to the extremely useful observations from [@oliverdudman at FreeCodeCamp Forum](https://forum.freecodecamp.org/t/please-help-react-drum-machine-play-sound-with-click-event/199383/5) I could make progress and understand the problem.

The test uses a keyboard event which has an undefined key property. So, I used keyCodes, although it is a deprecated property. 

Here: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode says that *keyCode* is deprecated and to avoid using it. And here: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent it is recommended to use *key* instead.

## Previously
The [version in this repository](https://zdflower.github.io/tamburmasxino/) (**master branch**) works and passes the tests.

Then I made changes [here](https://codepen.io/zdflower/pen/zaZRrJ) to make the code less repetitive, and still works, but there are tests that fail:

    #Drum Machine tests

    #Technology Stack
        1. You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding! 
    #Tests
        1. I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements
        2. Within #drum-machine I can see an element with corresponding id="display".
        3. Within #drum-machine I can see 9 clickable "drum pad" elements, each with a class name of "drum-pad", a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.
        4. Within each .drum-pad, there should be an HTML5 <audio> element which has a src attribute pointing to an audio clip, a class name of "clip", and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).
        5. When I click on a .drum-pad element, the audio clip contained in its child <audio> element should be triggered.64ms
        6. When I press the trigger key associated with each .drum-pad, the audio clip contained in its child <audio> element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", pressing the W key should trigger the drum pad which contains the string "W", etc.).

        Error: TypeError: event.key is undefined (https://s.codepen.io/boomerang/iFrameKey-b71fd773-2bba-17b2-4fb9-1abcf857b4bc/index.html:141)[1]</</n.on/r.onerror@https://cdnjs.cloudflare.com/ajax/libs/mocha/3.0.2/mocha.min.js:1:978
        __triggerEvent@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:19847:27
        createDrumMachineTests/</</</</</<@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:19929:16
        createDrumMachineTests/</</</</<@https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js:19928:14

        6. When I press the trigger key associated with each .drum-pad, the audio clip contained in its child <audio> element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", pressing the W key should trigger the drum pad which contains the string "W", etc.).813ms 

    "after all" hook

    Error: Script error. (https://cdnjs.cloudflare.com/ajax/libs/mocha/3.0.2/mocha.min.js:0)[1]</</n.on/r.onerror@https://cdnjs.cloudflare.com/ajax/libs/mocha/3.0.2/mocha.min.js:1:978
