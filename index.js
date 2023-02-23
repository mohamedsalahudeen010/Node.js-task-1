const fs=require("fs");

const express=require("express")

const app=express();

port=9000;

const path=require("path")

const time=Date.now();

const date=new Date;

const day=date.getDate();
const month=date.getMonth();
const year=date.getFullYear();
const hour=date.getHours();
const min=date.getMinutes();
const sec=date.getSeconds();

console.log(day)
console.log(month)
console.log(year)
console.log(hour)
console.log(min)
console.log(sec)

const fileName=`${day}-${month}-${year}_${hour}hrs-${min}mins-${sec}secs`

console.log(fileName)

content=` Timestamp : ${time}`

const currentDir=path.join(__dirname,"task");

fs.writeFile(`${currentDir}/${fileName}.txt`,content,(err)=>{
    if(err){console.log(err)}
    else(console.log("Directory is created"))
})


app.listen(port,()=>console.log("server created successfully"))

app.use(express.static("task"));

app.get("/",(req,res)=>{
    res.sendFile(`${currentDir}/${fileName}.txt`)
})