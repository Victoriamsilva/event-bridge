const express = require("express")
const router = express.Router()
const controller = require("../controler/index")

router.get('/create-vehicle', controller.createVehicle)
router.post('/create-client', controller.createClient)

module.exports = router;