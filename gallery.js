/* Function triggered when hovering over a preview image */
function upDate(previewPic) {
    // 1. Log information to console for verification
    console.log("Event triggered: Mouseover");
    console.log("Image Alt:", previewPic.alt);
    console.log("Image Source:", previewPic.src);

    // 2. Change the text of the element with id 'image'
    document.getElementById("image").innerHTML = previewPic.alt;

    // 3. Change the background image of the element with id 'image'
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

/* Function triggered when moving the mouse away from a preview image */
function unDo() {
    // 1. Reset the background image back to empty
    document.getElementById("image").style.backgroundImage = "url('')";

    // 2. Reset the text back to original
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}