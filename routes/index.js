const express = require("express")
const router = express.Router()
const controller = require("../controler/index")

router.post('/create-vehicle', controller.createVehicle)
router.post('/create-client', controller.createClient)

module.exports = router;