// document.addEventListener('DOMContentLoaded', function() {
//     var countdownElement = document.getElementById('countdown');


//     function countdown(number, callback){
//         setTimeout(function() {
//             if (number > 0){
//                 countdownElement.textContent = number;
//                 countdown(number - 1, callback);
//             }else {
//                 callback();
//             }

//         }, 1000);
//     }

//     countdown(10, function() {
//         countdownElement.textContent = 'Happy Independence Day!';
//     });
// });

// function timeout(){
//     document.getElementById("countdown").innerHTML += "Happy Independence Day"

// }

// var age = prompt("Enter your age");
// var a = new Promise((resolve, reject)=>{
//     if(age>=18){
//         resolve("you are eligible");
//     }else{
//         reject("you are not eligibli");
//     }
// })
// // console.log(a);

// a.then((data)=>console.log(data)).catch((err)=>console.log(err));




// function chain(num){
//     return new Promise((resolve, reject)=>resolve(num*2));
// }

//  chain(5).then((data)=>{
//     console.log(data);
//     return chain(data);
//  }).then((data1)=>{
//     console.log(data1);
//     return chain(data1)

//  }).then((data2)=>{
//     console.log(data2);
//  })

var res = fetch("https://openWeathermap.org/api");
res.then((data)=>data.json()).then((data1)=>{
console.log(data1);
for (let i = 0; i < data1.length; i++){
   console.log(data1[i].name);
   // document.body.append(data1[i].name);
   function countryName(){
      var countryName = document.getElementById("countryInput").Value;
      console.log("Checking weather for " + countryName);
   }
   
   
}
 
});
  

function checkWeather(){
   var countryName = document.getElementById("countryInput").Value;
   console.log("Checking weather for " + countryName);
}

// var confirmed = fetch("https://data.covid19india.org/v4/min/data.min.json");
// confirmed.then((data)=>data.json()).then((data1)=>{
//    // console.log(data1);
//    for(var i in data1 ){
//       console.log(data1[i].total.confirmed);
//       // document.body.append(data1[i].total.confirmed);
//    }
//    // document.body.append(data1[i].total.confirmed);

// })

// document.body.append(data1[i].total.confirmed);
