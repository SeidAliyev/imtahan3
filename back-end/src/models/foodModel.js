const mongoose = require("mongoose")

const schema = mongoose.Schema({
	title: String,
	content: String,
	price:Number,
	image:String
})

module.exports = mongoose.model("Food", schema)