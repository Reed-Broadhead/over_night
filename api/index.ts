require("dotenv").config()
const express = require("express");
const PORT = 5555
const { PrismaClient } = require('@prisma/client');


const app = express();

const prisma = new PrismaClient();

// commands

app.get("/", async (req: any, res: any, next: any) => {
    try{
        res.json("hello world!");
    }catch(err){
        next(err);
    }
})

app.get('/users', async (req: any, res: any, next: any) => { 
    // console.log(req)
    try {
    const users = await prisma.user.findMany({})
    res.json(users)
    } catch(error: any){
        next(error.message);
    }
}) 

app.listen(
    PORT,
    () => console.log(`it works on http://localhost:${PORT}`)
)
