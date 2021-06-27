const express =require('express')
const app = express();
const appService =require('./app.service')
const cors = require('cors');
require('dotenv').config();

app.use(cors());
appService.connectToDatabase();
appService.setAppMiddleware(app);
appService.apiSetUp(app);

module.exports=app