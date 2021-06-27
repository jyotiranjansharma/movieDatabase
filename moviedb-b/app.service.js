const bodyparser = require('body-parser');
const api = require('./api/v1');
const db = require('./db');
const jwt = require('jsonwebtoken')

const connectToDatabase = () => {
    db.createMongoConnection();
    dbConnection = db.getMongoConnection();
};

const setAppMiddleware = (app) => {
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended : false}));
}

const apiSetUp = (app) => {
    app.use('/api/v1/',api);
}

const AuthenticateToken = (req,res,next) => {
    const authHeader=req.headers['authorization']
    const token=authHeader && authHeader.split(' ')[1]
    if(token==null) return res.sendStatus(401)
    
    jwt.verify(token,'samplesecret',(err,user) =>{
        if(err) return res.sendStatus(403)
        req.user=user
        console.log(user)
        next()
    })
};

module.exports = {
    connectToDatabase,
    setAppMiddleware,
    apiSetUp,
    AuthenticateToken
}