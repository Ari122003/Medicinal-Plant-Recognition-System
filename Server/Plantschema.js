const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
	Name: {
		type: String,
		required: true,
	},
	Image: {
		type: String,
		required: true,
	},
	Scientific_name: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Plant", imageSchema);
