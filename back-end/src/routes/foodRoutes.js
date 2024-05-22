const express = require("express")
const foodController = require("../controller/foodController")
const router = express.Router()

router.get("/food",foodController.getAllFood)
router.get("/food/:id",foodController.getFoodbyID)
router.post("/food",foodController.postFood)
router.delete("/food/:id",foodController.deleteFood)


module.exports = router