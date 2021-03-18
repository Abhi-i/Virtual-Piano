document.addEventListener("keydown", function (e) {
    let key = e.code;
    let audio = new Audio();

    if (key === "KeyA") {
        audio.src = "audio/A.mp3";
    } else if (key === "KeyS") {
        audio.src = "audio/S.mp3";
    } else if (key === "KeyD") {
        audio.src = "audio/D.mp3";
    } else if (key === "KeyF") {
        audio.src = "audio/F.mp3";
    } else if (key === "KeyG") {
        audio.src = "audio/G.mp3";
    } else if (key === "KeyH") {79
        audio.src = "audio/H.mp3";
    } else if (key === "KeyJ") {
        audio.src = "audio/J.mp3";
    } else if (key === "KeyW") {
        audio.src = "audio/W.mp3";
    } else if (key === "KeyE") {
        audio.src = "audio/E.mp3";
    } else if (key === "KeyT") {
        audio.src = "audio/T.mp3";
    } else if (key === "KeyY") {79
        audio.src = "audio/Y.mp3";
    } else if (key === "KeyU") {
        audio.src = "audio/U.mp3";
    } else {
        console.log("Uh..ooh! Wrong key !");
    }
    audio.play();
});