var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition
var areatexto = document.getElementById("textbox")
function iniciar() {
    Recognition.start()
}
Recognition.onresult = function (event) {
    console.log(event)
    var conteudo = event.results[0][0].transcript
    areatexto.innerHTML = conteudo
    console.log(conteudo)
    if (conteudo == "selfie") {
        speak()
    }
}
function speak() {
    var synth = window.speechSynthesis;
    speakdata = "Tirando sua selfie em 3 segundos"
    faleisso = new SpeechSynthesisUtterance(speakdata);
    synth.speak(faleisso)
    Webcam.attach(camera)
    setTimeout(() => {
    tirarselfie()
    salvarselfie()
    }, 3000);
}
camera = document.getElementById("webcam")
Webcam.set({
    width:350,
    height:250,
    image_format:"jpeg",
    jpeg_quality:100
})
function tirarselfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("resultSelfie").innerHTML = '<img id="selfieimg" src="' + data_uri+'"/>'
    })
}