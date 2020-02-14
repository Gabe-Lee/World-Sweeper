import express from 'express';
import path from 'path';
import cors from 'cors';

const server = express();
const serve = express.static;

const clientFiles = path.resolve(__dirname, '..', '..', 'dist', 'client');
console.log(clientFiles);

server.use(cors());
server.use('/', serve(clientFiles));

export default server;
