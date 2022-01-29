const express = require('express');
const router = express.Router();
const axios = require('axios');

const externalService = require('../config/externalService');

const { baseUrl } = externalService;

router.get('/1/', async (req, res) => {
  let fetchResponse = null;
  try {
    fetchResponse = await axios.get(`${baseUrl}/generation/1/`);
    const fetchResult = await fetchResponse;
    res.status(200).json(fetchResult?.data);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
