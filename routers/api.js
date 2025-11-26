const express = require('express');
const router = express.Router();
const multer = require('multer');
const komikController = require('../controllers/komikController');
const upload = multer({ storage: multer.memoryStorage() });

