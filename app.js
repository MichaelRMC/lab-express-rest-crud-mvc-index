const express = require("express");
const locations = require("./controllers/locationsController.js");
const machines = require("./controllers/machinesController.js");
const person = require("./controllers/personController.js");	
const plans = require("./controllers/plansController.js");
const specialEvents = require("./controllers/special-eventsController.js");

const app = express();

app.use("/locations", locations);
app.use("/machines", machines);
app.use("/person", person);
app.use("/plans", plans);
app.use("/specialEvents", specialEvents)

app.get("/", (req, res) => {
	res.send("Hello, World!")
})

app.get("*", (req, res) => {
	res.status(404).json("Page Not Found!")
})


module.exports = app