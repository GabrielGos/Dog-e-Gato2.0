img = "";
status = "";
object = [];

function preload() {
img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}

function draw() {
    image(video, 0, 0, 380, 380);
    if(status != "")
        {
r = random(255);
g = random(255);
b = random(255);

            objectDetector.detect(video, gotResult);
            for (i = 0; i <objects.length; i++) {

         document.getElementById("status").innerHTML = "Status: Objeto Detectado";
         document.getElementById("numberOfObjects").innerHTML = "Quantidade de Objetos Detectados: " + object;
         fill("#FF0000");
fill(r,g,b);
         percent = floor(objects[i].confidence * 100);
         text(object[i].label + " " + percent + "%", object[i].x, object[i].y);
         noFill();
         stroke(r,g,b);
         rect(object[i].x, object[i].y, objects[i])
            }
        }

    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350 );


    fill("#FF0000"); 
    text("Cat", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320 );

}

function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(video, gotResult); 
}

function gotResult(error, results) {
    if (error) {
    console.log(error);
    }
    console.log(results);
    objects = results;
}

function start() {
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detectando Objetos";
    fill("#FFF0000");
    percent = floor(object[i].objectDetector);
       
}

