const express = require('express')
const app = express()
 
const data =[
    {ban:1,douong:'Cafe đen',soluong:3,isDelete:false,isPayed:false,},
    {ban:2,douong:'Cafe đen',soluong:3,isDelete:false,isPayed:false,},
    {ban:3,douong:'Cafe đen',soluong:3,isDelete:false,isPayed:false,},
    {ban:4,douong:'Cafe đen',soluong:3,isDelete:false,isPayed:false,},
]
app.get('/', function (req, res) {
  res.send('Hello Hoang 1234567890')
})
 
app.get('/movie', function (req, res) {
    res.send(data)
  })
   
app.get('/movie/:ban', function (req, res) {
  const ban = req.params.ban;
  const result = data.filter((item)=>{
    if(item.ban==ban) return true;
  })
  res.send(result);
})
app.listen(3000)

