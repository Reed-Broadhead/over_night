require("dotenv").config()
const express = require("express");
const PORT = 5555
const { PrismaClient } = require('@prisma/client');
const bcrypt = require("bcrypt")

const app = express();

const prisma = new PrismaClient();

const plainPassword = 'user_password';


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

app.post('/signup', async  (req: any, res: any, next: any)  => {
    const { username, password, email, address } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({ 
        data: {
            username: username,
            password: hashedPassword,
            email: email,
            address:address
        },
    })
    res.cookie('user', user)
    res.status(201).send({message: "User created successfully!", user: user})
})

app.listen(
    PORT,
    () => console.log(`it works on http://localhost:${PORT}`)
)
