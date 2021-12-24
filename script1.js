//import * as faceapi from 'face-api.js'
console.log('javascript1 working')
      
const imageUrl = "https://elasticbeanstalk-ap-southeast-1-555486273648.s3.amazonaws.com/uploads/face/face_image/37879/face0.jpg";

fetch(imageUrl, { 
  method: 'POST',
  mode: "cors", // or without this line
  redirect: 'follow',
  headers: {
      'content-type': 'application/json'
  }
  } )
  //                         vvvv
  .then(response => response.blob())
  .then(imageBlob => {
      // Then create a local URL for that image and print it 
      console.log(imageBlob)
      const imageObjectURL = URL.createObjectURL(imageBlob);
      console.log(imageObjectURL);
  });

//const detections = await faceapi
//    .detectAllFaces(img)
//    .withFaceLandmarks()
//    .withFaceDescriptor();


async function loadImage() {
  const img = await canvas.loadImage( 'https://elasticbeanstalk-ap-southeast-1-555486273648.s3.amazonaws.com/uploads/face/face_image/37879/face0.jpg' );
  //const image = await faceapi.fetchImage('https://elasticbeanstalk-ap-southeast-1-555486273648.s3.amazonaws.com/uploads/face/face_image/37879/face0.jpg')
}

//loadImage()
//then(console.log('success'))
/*
const firebaseConfig = {
  apiKey: "AIzaSyDi96Kp4rTltPol50hmoVuGjcvYqYPwS8s",
  authDomain: "tk-angular-dev.firebaseapp.com",
  databaseURL: "https://tk-angular-dev.firebaseio.com",
  projectId: "tk-angular-dev",
  storageBucket: "tk-angular-dev.appspot.com",
  messagingSenderId: "802748250939",
  appId: "1:802748250939:web:a7fe1d22d14bd121"
};

const app = firebase.initializeApp(firebaseConfig);
*/




//$('body').append('<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>');
$('body').append('<div id="loader-background"><div class="load"><div class="gear one"><svg id="blue" viewbox="0 0 100 100" fill="#aeb2b7"><path d="M97.6,55.7V44.3l-13.6-2.9c-0.8-3.3-2.1-6.4-3.9-9.3l7.6-11.7l-8-8L67.9,20c-2.9-1.7-6-3.1-9.3-3.9L55.7,2.4H44.3l-2.9,13.6      c-3.3,0.8-6.4,2.1-9.3,3.9l-11.7-7.6l-8,8L20,32.1c-1.7,2.9-3.1,6-3.9,9.3L2.4,44.3v11.4l13.6,2.9c0.8,3.3,2.1,6.4,3.9,9.3      l-7.6,11.7l8,8L32.1,80c2.9,1.7,6,3.1,9.3,3.9l2.9,13.6h11.4l2.9-13.6c3.3-0.8,6.4-2.1,9.3-3.9l11.7,7.6l8-8L80,67.9      c1.7-2.9,3.1-6,3.9-9.3L97.6,55.7z M50,65.6c-8.7,0-15.6-7-15.6-15.6s7-15.6,15.6-15.6s15.6,7,15.6,15.6S58.7,65.6,50,65.6z"></path></svg></div><div class="gear two"><svg id="pink" viewbox="0 0 100 100" fill="#ff6c60"><path d="M97.6,55.7V44.3l-13.6-2.9c-0.8-3.3-2.1-6.4-3.9-9.3l7.6-11.7l-8-8L67.9,20c-2.9-1.7-6-3.1-9.3-3.9L55.7,2.4H44.3l-2.9,13.6      c-3.3,0.8-6.4,2.1-9.3,3.9l-11.7-7.6l-8,8L20,32.1c-1.7,2.9-3.1,6-3.9,9.3L2.4,44.3v11.4l13.6,2.9c0.8,3.3,2.1,6.4,3.9,9.3      l-7.6,11.7l8,8L32.1,80c2.9,1.7,6,3.1,9.3,3.9l2.9,13.6h11.4l2.9-13.6c3.3-0.8,6.4-2.1,9.3-3.9l11.7,7.6l8-8L80,67.9      c1.7-2.9,3.1-6,3.9-9.3L97.6,55.7z M50,65.6c-8.7,0-15.6-7-15.6-15.6s7-15.6,15.6-15.6s15.6,7,15.6,15.6S58.7,65.6,50,65.6z"></path></svg></div><div class="gear three"><svg id="yellow" viewbox="0 0 100 100" fill="#36404e"><path d="M97.6,55.7V44.3l-13.6-2.9c-0.8-3.3-2.1-6.4-3.9-9.3l7.6-11.7l-8-8L67.9,20c-2.9-1.7-6-3.1-9.3-3.9L55.7,2.4H44.3l-2.9,13.6      c-3.3,0.8-6.4,2.1-9.3,3.9l-11.7-7.6l-8,8L20,32.1c-1.7,2.9-3.1,6-3.9,9.3L2.4,44.3v11.4l13.6,2.9c0.8,3.3,2.1,6.4,3.9,9.3      l-7.6,11.7l8,8L32.1,80c2.9,1.7,6,3.1,9.3,3.9l2.9,13.6h11.4l2.9-13.6c3.3-0.8,6.4-2.1,9.3-3.9l11.7,7.6l8-8L80,67.9      c1.7-2.9,3.1-6,3.9-9.3L97.6,55.7z M50,65.6c-8.7,0-15.6-7-15.6-15.6s7-15.6,15.6-15.6s15.6,7,15.6,15.6S58.7,65.6,50,65.6z"></path></svg></div></div><div class="text">loading</div></div>');
$(window).on('load', function(){
  setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
});

(function () {
  var location = window.document.location;

  var preventNavigation = function () {
      var originalHashValue = location.hash;

      window.setTimeout(function () {
          location.hash = 'preventNavigation' + ~~ (9999 * Math.random());
          location.hash = originalHashValue;
      }, 0);
  };

  window.addEventListener('beforeunload', preventNavigation, false);
  window.addEventListener('unload', preventNavigation, false);
})();

/*
function removeLoader(){
    $( "#loadingDiv" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loadingDiv" ).remove(); //makes page more lightweight 
  });  
} */

function removeLoader(){
  $( "#loader-background" ).fadeOut(500, function() {
    // fadeOut complete. Remove the loading div
    $( "#loader-background" ).remove(); //makes page more lightweight 
});  
}

var current = new Date();
//console.log(current)

console.log(current.getFullYear())
console.log(current.getMonth() + 1)
console.log(current.getDate())

console.log(current.getHours())
console.log(typeof current.getHours())
console.log(current.getMinutes())
console.log(typeof current.getMinutes())
console.log(current.getSeconds())
console.log(typeof current.getSeconds())


function play() {
  var audio = new Audio("https://www.mboxdrive.com/beeps.mp4");
  audio.play();
  console.log('played mp4 sound')
}

//setInterval(play, 2000)


let mybut = document.getElementById('click-but')
mybut.addEventListener('click', play)
