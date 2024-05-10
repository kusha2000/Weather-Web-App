const weather= require('./utils/weather');
const geo= require('./utils/geo');

// weather(13,-94).then((data)=>{
//   console.log(data);
// }).catch((error)=>{
//   console.log(error);
// });

geo("malkaduwawa")
.then((data)=>{
  return weather(data.lat,data.lon);
}).then((data)=>{
  console.log(data);
})
.catch((error)=>{
  console.log(error);
});
