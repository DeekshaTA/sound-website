# Drum Kit – Sound Website

This is a fun web-based drum kit project that plays sounds when specific buttons are clicked or when corresponding keys are pressed on the keyboard. Each key is associated with a different drum sound like snare, tom, crash, and kick.

To use the project, simply open `index.html` in any browser. You will see several buttons on the screen, each labeled with a specific key (e.g., W, A, S, D, J, K, L). When you either click on any of these buttons or press the matching key on your keyboard, the JavaScript file (`index.js`) will detect the event and play the corresponding sound stored in the `sounds/` folder. The `styles.css` file provides the visual styling of the buttons and overall layout.

The main files in this project are:  
- `index.html` – the main structure and layout of the drum kit  
- `index.js` – handles button clicks and keypress events to play audio  
- `styles.css` – adds styling to make the drum kit look interactive  
- `sounds/` – contains the drum sound files like `tom-1.mp3`, `kick-bass.mp3`, `snare.mp3`, etc.

The folder structure is as follows:

```
sound-website/
├── index.html
├── index.js
├── styles.css
├── sounds/
│   ├── tom-1.mp3
│   ├── tom-2.mp3
│   ├── snare.mp3
│   ├── crash.mp3
│   ├── kick-bass.mp3
│   └── ...
└── README.md
```
