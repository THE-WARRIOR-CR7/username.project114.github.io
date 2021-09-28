function preload() {

}
function setup() {
    canvas=createCanvas(579,500);
    canvas.position(500,150);
    video=createCapture(VIDEO);
    video.hide();
   
}
function draw() {
    image(video,200,200,200,200);
fill("red");
stroke("darkred");
circle(100,450,50);
circle(500,450,50);
circle(100,100,50);
circle(500,100,50);
fill("green");
stroke("darkgreen");
rect(125,90,350,20);
rect(125,440,350,20);
rect(90,120,20,310);
rect(490,120,20,310);
}

