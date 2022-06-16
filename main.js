Webcam.set({
 width: 350,
 height: 300,
 image_format: 'png',
 png_quality: 90    
 });
 camera = document.getElementById("camera");
 Webcam.attach("camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_uri+"'>"
     });
}
console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/s7cOc-lu9/model.Json",modelloaded)
function modelloaded(){
    console.log("modelisloaded")
}
function speak() {
    var synth=window.speechSynthesis
    speak_data1= "first prediction is "+prediction_1; 
    speak_data2= "second prediction is"+prediction_2;
    utterthis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterthis);
}
function check() {
    img = document.getElementById("capture_image")
    classifier.classify(img,gotresult)
}
prediction_1 = "";
prediction_2 = "";
function gotresult(error,results) {
    console.log("hello")
    console.log(results);
if(error)
{console.error(error)

}
else{
    console.log(results)
    document.getElementById("result_emotion_name").innerHTML= results[0].label;
    document.getElementById("result_emotion_name_2").innerHTML= results[1].label;
    prediction_1=results[0].label;
    prediction_2=results[1].label;
    speak();
    if(prediction_1== "best")
    {document.getElementById("update_emoji").innerHTML="&#128076;";}
    if(prediction_1== "victory")
    {document.getElementById("update_emoji").innerHTML="&#9996;";}
    if(prediction_1== "amazing")
    {document.getElementById("update_emoji").innerHTML="&#x1F44C;";}

    if(prediction_2== "best")
    {document.getElementById("update_emoji_2").innerHTML="&#128077;";}
    if(prediction_2== "victory")
    {document.getElementById("update_emoji_2").innerHTML="&#9996;";}
    if(prediction_2== "amazing")
    {document.getElementById("update_emoji_2").innerHTML="&#128076;";}
}
}