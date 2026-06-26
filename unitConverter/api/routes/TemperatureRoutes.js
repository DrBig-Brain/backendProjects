const express = require("express");
const router = express.Router();

const {
    fromCelciusToFahrenheit,
    fromFahreneheitToCelcius,
    fromCelciusToKelvin
} = require("../controllers/TemperatureController");

router.route("/fctf").get(fromCelciusToFahrenheit);
router.route("/fftc").get(fromFahreneheitToCelcius);
router.route("/fctk").get(fromCelciusToKelvin);

module.exports = router;