const express = require("express");
const router = express.Router();

const{
    fromKm,
    fromMile,
    fromFeet,
    toKm,
    toMile,
    toFeet,
} = require("../controllers/LengthController")

router.route("/tokm").get(toKm)
router.route("/tomile").get(toMile)
router.route("/tofeet").get(toFeet)
router.route("/fromfeet").get(fromFeet)
router.route("/fromkm").get(fromKm)
router.route("/frommile").get(fromMile)

module.exports = router;