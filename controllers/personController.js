const express = require("express");
const person = express.Router();
const personArray = require("../models/person.js");

person.get("/", (req, res) => {
	res.json(personArray);
});

module.exports = person;
