const express=require('express')

let setRouter = (app) => {


let helloFunction = (req,res) => res.send('Hello to world');
let aboutFunction = (req,res) => res.send("This is about me");

app.get('/hello-world',helloFunction);
app.get('/about',aboutFunction);

}

module.exports = {
    setRouter:setRouter
}