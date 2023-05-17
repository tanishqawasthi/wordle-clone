const PORT = 5500;
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());

app.get('/word', async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
    params: { count: '5' },
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data)
    const word = response.data[0];
    console.log('Random word:', word);
    // res.json({ word });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch word' });
  }
});

app.listen(PORT, () => console.log('Server running on port ' + PORT));


//Command to run on server- npm run start:backend