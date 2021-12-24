console.log('javascript working')

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      //'Content-Type': 'application/x-www-form-urlencoded'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  console.log(response.status)
  console.log(response.ok)
  return response.json(); // parses JSON response into native JavaScript objects
}


let myParams = { apiKey: 12345, kod: 6717518100000799, enrollid: 12389, verifymode: 0, inoutmode: 0, tahun: 2021, bulan: 8, hari: 23, jam: 18, minit: 18, saat: 50}
var processedData = JSON.stringify(myParams)
console.log(processedData)
let mySubdomain = 'p2d'

console.log('now posting to')
postData(`https://${mySubdomain}.tkeeper.net/devices/push_glogs`, myParams)
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err)
  })