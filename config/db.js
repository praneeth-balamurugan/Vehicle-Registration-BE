const mongoose = require("mongoose");

const connectDB = async() => {
	try
	{
		const db = "mongodb+srv://praneeth:praneeth2004@cluster0.hplvp4p.mongodb.net/sample?retryWrites=true&w=majority";
		await mongoose.connect(db);
		console.log("MongoDB connected...");
	}
	catch(err)
	{
		console.log(err);
		process.exit(1);
	}
}

module.exports = connectDB;