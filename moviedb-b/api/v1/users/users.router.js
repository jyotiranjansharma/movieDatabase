const router = require('express').Router();
const userModule = require('./users.entity');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async(req, res) => {
    try {
        const {username, firstname, lastname, phone, email, password} = req.body;

        const userName = await userModule.findOne({username: username});
        if(userName) return res.send({ status: 404, message: "Username already exists!" })

        const userEmail = await userModule.findOne({email: email});
        if(userEmail) return res.send({ status: 404, message: "Email id already exists!" })

        const userPhone = await userModule.findOne({phone: phone});
        if(userPhone) return res.send({ status: 404, message: "Phone number already exists!" })

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = new userModule({
            username: username,
            firstname: firstname,
            lastname: lastname,
            phone: phone,
            email: email,
            password: passwordHash
        })

        await newUser.save()

        res.send({ status: 201, message: "Registered successfully !", userInfo: newUser});
    } catch (err) {
        return res.send({ status: 404, message: "Record creation failed!", err: err })
    }
});

router.post('/login', async(req, res) => {
    try {
        const {email, password} = req.body;
        const user = await userModule.findOne({email: email})
        if(!user) return res.send({ status: 404, message: "Username doesn't exists!" })

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.send({ status: 404, message: "Invalid password!" })

        // if login success create token
        const payload = {id: user._id, name: user.username}
        const token = jwt.sign(payload, process.env.JWT_TOKEN, {expiresIn: "1h"})

        res.send({ status: 201, message: "Logged in successfully!", token: token, userInfo: user});
    } catch (err) {
        return res.status(404).json({msg: err.message})
    }

});

router.get('/verify', (req, res) => {
    try {
        const token = req.header("Authorization")
        if(!token) return res.send(false)

        jwt.verify(token, process.env.JWT_TOKEN, async (err, verified) =>{
            if(err) return res.send(false)

            const user = await userModule.findById(verified.id)
            if(!user) return res.send(false)

            return res.send(true)
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
});

module.exports = router;