// LOADING MODEL.JSON keras_facenet
//const { tf } = require("face-api.js")

console.log('script 3 working')



var facenet_model = undefined
async function loadmodel(){
    facenet_model = await tf.loadLayersModel('/facenet_js/model.json')
    console.log(facenet_model)
    console.log(facenet_model.summary)
    //var picture = document.getElementById('test_face')
    //facenet_model.predict(picture)
}


loadmodel()