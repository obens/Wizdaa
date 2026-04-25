const express = require("express");
const router = express.Router();

const timeOffController = require("../controllers/timeOffController");
const hcmController = require("../controllers/hcmController");

router.post("/hcm/sync", hcmController.syncBalance);
router.post("/timeoff/request", timeOffController.createRequest);
router.post("/timeoff/:id/approve", timeOffController.approve);
router.post("/timeoff/:id/reject", timeOffController.reject);

module.exports = router;
