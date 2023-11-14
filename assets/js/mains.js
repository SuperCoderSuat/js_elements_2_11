function changeBackground() {
    
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // inline varibalen
    document.body.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";

    // mit lokalen variablen gehts auch

    // let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    // document.body.style.background = bgColor;

}