// VLADMANDIC FACEAPI JS

console.log('script 3a working')
console.log(faceapi.nets)

async function loadModel(){
    await faceapi.nets.ssdMobilenetv1.loadFromUri('/model')
    console.log(faceapi.nets)
}

loadModel().then(() => {
    console.log('Successfully load model')
})
