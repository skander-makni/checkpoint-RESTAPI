const express = require("express");

const router = express.Router();
const Contact = require("../model/Contact");
const controllers = require("../routes/Controllers/contact.contollers");

router.get("/", controllers.getcontact);

router.post("/", controllers.addcontact);

router.delete("/:id", controllers.deletecontact);
router.get("/:_id", controllers.getonecontact);
router.put("/:_id", controllers.updatecontact);
module.exports = router;
