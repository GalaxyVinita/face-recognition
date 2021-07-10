Webcam.attach("camera");

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality:90
});

function takephoto()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML 
        = '<img id="selfie" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/3QZXI0JuK/model.json', Loaded);

