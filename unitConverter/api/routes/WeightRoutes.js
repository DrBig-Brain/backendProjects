const express = require("express");
const router = express.Router();
const {
    toKg,
    toPound,
    toOunce,
    fromKg,
    fromPound,
    fromOunce
} = require("../controllers/WeightController");

router.route('/tokg').get(toKg);
router.route('/topound').get(toPound);
router.route('/toounce').get(toOunce);
router.route('/fromkg').get(fromKg);
router.route('/frompound').get(fromPound);
router.route('/fromounce').get(fromOunce);

module.exports = router