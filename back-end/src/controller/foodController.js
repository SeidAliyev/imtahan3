const express = require("express")
const Food = require("../models/foodModel") // new

// Get all posts
const getAllFood = async (req, res) => {
	const posts = await Food.find()
	res.send(posts)
}
const postFood = async (req, res) => {
	const post = new Food({
		title: req.body.title,
		content: req.body.content,
		price: req.body.price,
		image: req.body.image
	})
	await post.save()
	res.send(post)
}
const getFoodbyID = async (req, res) => {
	try {
		const post = await Food.findOne({ _id: req.params.id })
		res.send(post)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
}
const deleteFood = async (req, res) => {
	try {
		await Food.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
}

module.exports = {getAllFood,postFood,getFoodbyID,deleteFood}