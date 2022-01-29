const express = require('express');
const router = express.Router();
const axios = require('axios');

const externalService = require('../config/externalService');

const { baseUrl } = externalService;

router.get('/2/', async (req, res) => {
  let fetchResponse = null;
  try {
    fetchResponse = await axios.get(`${baseUrl}/generation/2/`);
    const fetchResult = await fetchResponse;
    res.status(200).json(fetchResult?.data);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
