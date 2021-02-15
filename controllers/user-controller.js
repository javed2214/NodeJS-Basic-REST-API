const userModel = require('../models/user-model')

const mongoose = require('mongoose')
const User = mongoose.model('User')

// router.get('/show', User.showData)
exports.showData = (req, res) => {
    User.find().then((user) => {
        res.send(user)
    }).catch((err) => {
        res.send('Error Occurred')
    })
}

// router.post('/insert', User.insertData)
exports.insertData = (req, res) => {
    User.create(req.body).then((user) => {
        res.send(user)
    }).catch((err) => {
        res.send('Error Occurred')
    })
}

// router.put('/update/:id', User.updateData)
exports.updateData = (req, res) => {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body).then((user) => {
        User.findOne({ _id: req.params.id }).then((user) => {
            res.send(user)
        })
    }).catch((err) => {
        res.send('Error Occurred')
    })
}

// router.delete('/delete/:id', User.deleteData)
exports.deleteData = (req, res) => {
    User.findByIdAndRemove({ _id: req.params.id }).then((user) => {
        res.send(user)
    }).catch((err) => {
        res.send('Error Occurred')
    })
}
