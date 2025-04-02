import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const HOST = '192.168.29.130';
const PORT = 3000;

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});