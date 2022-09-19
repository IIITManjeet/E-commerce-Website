import express from "express";
const app=express();
import cors from 'cors';
import http from 'http';
const server=http.createServer(app);
import {Server} from 'socket.io';
const io= new Server(server,{
 cors:'*',
 method:'*'
})

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

server.listen(8080,()=>{
 console.log('server running at port',8080)
})