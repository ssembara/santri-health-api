const env = require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express')
// const morgan = require("morgan");
const helmet = require("helmet");
const cors = require('cors');
let multer = require('multer');
let upload = multer();
const app = express();

// config
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(upload.array()); 
// app.use(morgan("dev"));
app.use(helmet())
app.use(cors());


// Static files path
app.use(express.static(__dirname + '/public'))

// router
app.get('/api', async (req, res) => {
    res.send({ message: "hello world"})
})
app.post('/api', async (req, res) => {
    res.send({ message: req.body.msg})
})
app.use('/api/classes', require('./app/routes/class.routes'))
app.use('/api/students', require('./app/routes/student.routes'))
app.use('/api/diseases', require('./app/routes/disease.routes'))


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running in ${port}`)
})
