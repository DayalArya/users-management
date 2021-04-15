require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true
		});
		console.log(`Mongodb connected to: ${conn.connection.host}`);
	} catch (e) {
		console.log(e);
	}
}

module.exports = connectDB;
