function preload(){
clown_nose = loadImage("https://i.postimg.cc/pdcmssQ8/Clown-nose-large.png")
}
noseX = 0
noseY = 0

function setup(){
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()

    PoseNet = ml5.poseNet(video, modelLoaded)
    PoseNet.on('pose', gotResults)
}

function modelLoaded(){
    console.log("Model Loaded!")
}

function gotResults(results){
    if(results.length > 0){
        console.log("the x is " + results[0].pose.nose.x)
        console.log("the y is " + results[0].pose.nose.y)
        noseX = results[0].pose.nose.x - 30
        noseY = results[0].pose.nose.y - 30

    }
}

function draw(){
image(video, 0, 0, 300, 300)
image(clown_nose, noseX, noseY, 75, 75)
}

function takeSnapshot(){
    save("myfilterimage.png")
}