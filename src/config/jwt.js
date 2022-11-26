const jwt=require('jsonwebtoken');
require('dotenv').config

const generateToken=(payload)=>{
    return jwt.sign(payload, process.env.secret);
};

module.exports={
    generateToken,
};