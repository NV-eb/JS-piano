document.addEventListener("DOMContentLoaded", () => {
    // Map keys to audio file paths
    const notes = {
        "01": "sounds/key01.mp3",
        "02": "sounds/key02.mp3",
        "03": "sounds/key03.mp3",
        "04": "sounds/key04.mp3",
        "05": "sounds/key05.mp3",
        "06": "sounds/key06.mp3",
        "07": "sounds/key07.mp3",
        "08": "sounds/key08.mp3",
        "09": "sounds/key09.mp3",
        "10": "sounds/key10.mp3",
        "11": "sounds/key11.mp3",
        "12": "sounds/key12.mp3",
        "13": "sounds/key13.mp3",
        "14": "sounds/key14.mp3",
        "15": "sounds/key15.mp3",
        "16": "sounds/key16.mp3",
        "17": "sounds/key17.mp3",
        "18": "sounds/key18.mp3",
        "19": "sounds/key19.mp3",
        "20": "sounds/key20.mp3",
        "21": "sounds/key21.mp3",
        "22": "sounds/key22.mp3",
        "23": "sounds/key23.mp3",
        "24": "sounds/key24.mp3"
    };

    // Map computer keyboard keys to piano keys
    const keyboardMapping = {
        "q": "01", // C
        "a": "02", // C#
        "w": "03", // D
        "s": "04", // D#
        "e": "05", // E
        "d": "06", // F
        "r": "07", // F#
        "f": "08", // G
        "t": "09", // G#
        "g": "10", // A
        "y": "11", // A#
        "h": "12", // B
        "u": "13", // High C
        "j": "14", // High C#
        "i": "15", // High D
        "k": "16", // High D#
        "o": "17", // High E
        "l": "18", // High F
        "p": "19", // High F#
        ";": "20" // High G
    };
  

    // Attach click event to all piano keys
    const pianoKeys = document.querySelectorAll(".piano-keys");
    pianoKeys.forEach((key) => {
        key.addEventListener("click", () => {
            const note = key.getAttribute("data-key");
            playNote(notes[note]);
        });
    });

    // Handle keyboard input
    document.addEventListener("keydown", (event) => {
        const key = event.key.toLowerCase(); // Get the pressed key
        const pianoKey = keyboardMapping[key];
        if (pianoKey) {
            playNote(notes[pianoKey]);

            // Highlight the corresponding piano key
            const keyElement = document.querySelector(`.piano-keys[data-key="${pianoKey}"]`);
            if (keyElement) {
                keyElement.classList.add("active");
                setTimeout(() => keyElement.classList.remove("active"), 200);
            }
        }
    });

    // Function to play a note
    function playNote(notePath) {
        if (notePath) {
            const audio = new Audio(notePath);
            audio.play();
        }
    }
});
