const env = require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require('cors')
const app = express()

// config
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(morgan("dev"));
app.use(helmet())
app.use(cors());


// Static files path
app.use(express.static(__dirname + '/public'))

// router
app.get('/api', async (req, res) => {
    res.send({ message: "hello world"})
})

const port = process.env.APP_PORT
app.listen(port, () => {
    console.log(`Server is running in ${port}`)
})