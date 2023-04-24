prediction="";

Webcam.set({
width:350,
height:300,
image_format:"png",
png_quality:90
});

camera=document.getElementById("web");


Webcam.attach(camera);

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("pic").innerHTML='<img id="captured_image" src="'+data_uri+'">';
        })  ;
        }
        
console.log("ml5 version:",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/rvXbOmY7s/model.json")
function modelloaded(){
console.log("model loaded");
}

function speak(){
var synth=window.speechSynthesis;
speak_data_1="The first prediction is"+prediction1;
speak_data_2="And the second predicton is"+prediction2;
var utterthis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
synth.speak(utterthis);
}