const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/locations.js");

locations.get("/", (req, res) => {
	res.json(locationsArray)
})

module.exports = locations;