const express = require('express')
const appConfig=require("./config/appConfig")
const fs=require('fs')
const app = express();

let routesPath='./route'
fs.readdirSync(routesPath).forEach(function (file){
    if(file.indexOf('.js')) {
        let routes = require(routesPath + '/' +file)
        routes.setRouter(app)
    }
})

app.get('/',(req,res) => res.send("Hello World"))

app.listen(appConfig.port,() => console.log("This is console"))