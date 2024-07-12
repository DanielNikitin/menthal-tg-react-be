const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

let ownerStatus = '... еще не выбрал свой статус настроения';

// Endpoint for checking server status
app.get('/api/status', cors(), (req, res) => {
  res.status(200).json({ status: '200' });
});

// Endpoint для получения текущего состояния владельца
app.get('/api/owner-status', cors(), (req, res) => {
  res.status(200).json({ status: ownerStatus });
});

// Endpoint для обновления состояния владельца
app.post('/api/update-owner-status', cors(), (req, res) => {
  const { status } = req.body;
  ownerStatus = status;
  res.status(200).json({ message: 'Owner status updated successfully', status: ownerStatus });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
