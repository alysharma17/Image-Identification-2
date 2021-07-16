img="";
status="";
function preload() {
img=loadImage("fruits_image.jpg");
}

function setup() {
canvas=createCanvas(600, 600);
canvas.center();
coco_ssd=ml5.objectDetector("cocossd", model_loaded);
document.getElementById("status").innerHTML="Detecting Objects";
}

function model_loaded() {
    console.log("model loaded!");
    status=true;
    coco_ssd.detect(img, getResults);
}
function draw() {
image(img, 0, 0, 600, 600);

}

function getResults(error, results){
if (error) {
    console.error(error);
}
console.log(results);

}

function back() {
    window.location="index.html"; 
}