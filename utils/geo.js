const axios = require("axios");

const location = "Kurunegala";

const getGeo = (location) => {
  return new Promise((resolve, reject) => {
    const url ="https://api.openweathermap.org/geo/1.0/direct?q=" +location +"&limit=1&appid=0816dac7aafa00905cff8fdd88507b20";
    axios.get(url)
      .then(function (response) {
        resolve({
            name:response.data[0].name,
            lat:response.data[0].lat,
            lon:response.data[0].lon
        });
        // console.log(response.data[0].name);
        // console.log(response.data[0].lat);
        // console.log(response.data[0].lon);
      })
      .catch(function (error) {
        reject({error:'Unable to find the location'});
        //console.log("Unable to find the location");
      });
  });
};

module.exports=getGeo;