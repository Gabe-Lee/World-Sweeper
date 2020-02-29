import express from 'express';
import path from 'path';
import cors from 'cors';

const server = express();
const serve = express.static;

const clientFiles = path.resolve(__dirname, '..', '..', 'dist', 'client');
console.log(clientFiles);
console.log(__dirname);
server.use(cors());
server.use('/', serve(clientFiles));

export default server;
