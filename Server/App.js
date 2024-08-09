require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const connect = require("./Database");
const Plant = require("./Plantschema");
const uploader = require("./Uploader");
const path = require('path');

const app = express();
connect();
uploader();

const port = process.env.PORT;
app.use(express.json());

app.use(cors());

app.use(fileUpload());

app.post("/upload", (req, res) => {
	res.send(req.files);
});

app.get("/", (req, res) => {
	res.send("<h1>App is live<h1>");
});

app.use("/pics", express.static(path.join(__dirname, "Uploads")));

app.post("/image", async (req, res) => {
	let plant = await Plant.find({ Name: req.body.Name });

	res.send(plant);
});

app.listen(port, () => {
	console.log(`App is running on http://localhost:${port}`);
});
