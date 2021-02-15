const express = require('express')
const router = express.Router()

const User = require('../controllers/user-controller')

router.get('/show', User.showData)
router.post('/insert', User.insertData)
router.put('/update/:id', User.updateData)
router.delete('/delete/:id', User.deleteData)

module.exports = router