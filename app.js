if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
require('./models/db')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use('/', require('./routes/route'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is Running at PORT: ${PORT}`)
})