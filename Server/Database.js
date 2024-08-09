const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const url ="mongodb+srv://aritraadhikary2003:Aritra%402003@cluster0.tyyjybj.mongodb.net/";

const connect = async () => {
	await mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
		console.log("Successfully connected");
	});
};

module.exports = connect;
