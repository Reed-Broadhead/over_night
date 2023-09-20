// require("dotenv").config()
const express = require("express");
const PORT = 5555
const { PrismaClient } = require('@prisma/client');


const app = express();

const prisma = new PrismaClient();

app.get('/users', async (req, res, next) => { 
    try {
    const users = await prisma.user.findMany({})
    res.json(users)
    } catch(error){
        next(error.message);
    }
}) 

app.listen(
    PORT,
    () => console.log(`it works on http://localhost:${PORT}`)
)
