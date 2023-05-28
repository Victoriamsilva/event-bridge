const express = require("express")
const router = express.Router()
const controller = require("../controler/index")

router.get('/create-vehicle', controller.createVehicle)
router.post('/update-history', controller.updateHistory)

module.exports = router;