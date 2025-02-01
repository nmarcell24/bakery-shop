const express = require('express');
const router = express.Router();

const { getAllDesserts, incrementDessert, decrementDessert } = require('../controllers/dessertController');;

router.get("/", getAllDesserts);

router.put("/:id/increment", incrementDessert)

router.put("/:id/decrement", decrementDessert)

module.exports = router;
