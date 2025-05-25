const express=require('express');
const { loginControoler,registerControoler } = require('../controllers/userController');


const router=express.Router();

//LOGIN
router.post('/login',loginControoler);

//register
router.post('/register',registerControoler);

module.exports=router;