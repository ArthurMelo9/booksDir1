const Book = require('../models/bookModel')

const bookCtrl = {}

// create= post
bookCtrl.addBook = async (req, res) => {
    const { author, title, publisher, pages, ISBN } = req.body

    try {

        let book = await Book.create({ author, title, publisher, summary, pages, ISBN })
        res.status(200).send({ book })

    } catch (err) {
        res.status(400).send(err)
    }
}

//read= get

//update= put

//delete = delete

module.exports = bookCtrl