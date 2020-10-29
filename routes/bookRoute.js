const { Router } = require('express')
const router = Router()
const { addBook } = require('../controllers/bookController')

router.post('/books', addBook)

module.exports = router