const express = require('express');
const router = express.Router();

// set up controller for the customers
let controller = require('../controller/customers');

// GET route to get all customers
// this should be PROTECTED route that only the ADMIN can access
// router.get('/', controller.getAllCustomers);

// GET route to get one customer by name
// this should be PROTECTED route that only the ADMIN can access
// router.get('/:name', controller.getCustomersByName);