const path=require('path');
const express=require('express');
const weather = require('./utils/weather');
const geo = require('./utils/geo');
const app=express();


app.set('view engine','hbs');

const publicDirPath=path.join(__dirname,"../public");
app.use(express.static(publicDirPath));

app.get('/',(req,res)=>{
  res.render('index');
});

app.get('/weather',(req,res)=>{
  if (!req.query.address){
      res.send({error:'address on found!'})
  }
      geo(req.query.address)
      .then((data)=>{
          return weather(data.lat,data.lon)
      })
      .then((data)=>{
          res.send(data)
      })
      .catch((error)=>{
          res.send(error);
      })
  
});

app.listen(3000,()=>console.log('server is on port 3000'));
