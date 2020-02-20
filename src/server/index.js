import server from './server';

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => {
  console.log('server is listening on port', PORT);
});
