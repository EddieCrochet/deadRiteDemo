const express = require('express');
const router = express.Router();

// set up controller for the parts
let controller = require('../controller/parts');

// route to get parts by vehicle
router.get('/', controller.getPartsByVehicle)