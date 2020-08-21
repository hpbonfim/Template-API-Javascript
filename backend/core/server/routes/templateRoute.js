const express = require("express")
const router = express.Router()
const template = require('../controllers/templateService')

router.post("/", template.postData)
router.get("/", template.getData)
router.put("/:id", template.putData)
router.delete("/:id", template.deleteData)

module.exports = router