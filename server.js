import express from 'express';
import SetRoutes from './routes';

const server = express();

SetRoutes(server);

export default server;
