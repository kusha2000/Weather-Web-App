const axios = require("axios");

const getWeather = (lat, lon) => {
  return new Promise((resolve, reject) => {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?lat=" +lat +"&lon=" +lon +"&units=metric&appid=0816dac7aafa00905cff8fdd88507b20";
    axios.get(url)
      .then(function (response) {

        resolve({weather:'Currently '+response.data.weather[0].description+' and temparature '+response.data.main.temp+'c'});

        //console.log(response.data.main.temp);
        //console.log(response.data.weather[0].description);
      })
      .catch(function (error) {
        reject({error:'Unable to find the location, Please try another location'});
        //console.log('Unable to find the location, Please try another location');
      });

  });
};

module.exports=getWeather;
