const { Router } = require('express')
const router = Router()

router.get('/students')
router.post("/students")
router.delete("/students/:id")
router.patch("/students/:id")

module.exports = Router