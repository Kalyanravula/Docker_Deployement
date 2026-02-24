const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(express.json());


let count = 0;

app.post('/increment', (req, res) => {
  count += 1;
  res.json({ count });
});
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Express running inside Docker',
  });
});

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
