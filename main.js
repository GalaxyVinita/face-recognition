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
function Loaded()
{
    console.log('Model Loaded!');
}

function identify()
{
    img = document.getElementById('selfie');
    classifier.classify(img, gotResult);

    
}

function gotResult(error, results)
{
    console.log(results);
    if(error){
        console.log(error);
    }
    else{
        document.getElementById("obj_button").innerHTML = results[0].label;
        document.getElementById("acc_button").innerHTML = results[0].confidence.toFixed(3);
    }
}
