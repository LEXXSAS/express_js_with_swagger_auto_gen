const express = require('express')
const app = express()
const cookieParser = require('cookie-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
require('dotenv').config()
const port = 8888

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: '*'
}));

const router = require('./routes')

app.use('/api', router)

app.get('/' , (req , res)=>{
   res.send('hello from simple server :)')
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))
