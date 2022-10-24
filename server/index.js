const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const socketIO = require("socket.io");
const io = socketIO(server);

io.on("connection", socket => {
    socket.on("connected", (name)=>{
        console.log(name + " logged on");
    });
    socket.on("message", (name, message)=>{
        io.emit("messages", {name, message});
    });
});

server.prependListener("request", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
 });

server.listen(5000, ()=>{
    console.log("Servidor alsado");
});