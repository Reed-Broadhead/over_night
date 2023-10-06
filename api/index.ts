require("dotenv").config()
const express = require("express");
const PORT = 5555
const { PrismaClient } = require('@prisma/client');
const bcrypt = require("bcrypt")
const cookieParser = require('cookie-parser')

const app = express();

var Amadeus = require('amadeus');

app.use(express.json());
app.use(cookieParser());

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
    //  console.log(req)
    try {
    const users = await prisma.user.findMany({})
    res.json(users)
    } catch(error: any){
        next(error.message);
    }
}) 

app.post("/login", async (req: any , res: any, next: any) => {
    const { email, password } = req.body;
    console.log(password);
    try { const user = await prisma.user.findFirst({
        where: {
            email: email
        }
    })
   

    bcrypt.compare(password, user.password, (err: any, result: any) => {
        if (err) {
            console.log(err);
            //  Handle the error, e.g., send an error response
            return res.status(500).send({ message: "Internal server error" });
        } else if (result === true) {
            console.log(`Right password`);
            res.cookie('user', user)
            res.status(200).send({ message: "Authentication successful", user: user })};
        })
    } catch(error: any){
        next(error.message)}
    })



app.post('/signup', async  (req: any, res: any, next: any)  => {
  
    const { username, password, email, address } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword)
    const user = await prisma.user.create({ 
        data: {
            username: username,
            password: hashedPassword,
            email: email,
            address:address
        },
    })
    console.log("hi")
    res.status(201).send({message: "User created successfully!", user: user})
})

app.get('/checkCookies', (req: any, res: any, next: any) => {
    if (req.cookies.user){
        res.status(200).send({user: req.cookies.user})
    } else {
        res.status(404).send(null)
    }
})

app.patch('/logout', (req: any, res: any, next: any) => {
res.clearCookie("user")
res.status(201).send({message: "User logged Out"})
})


app.post('/getHotels', (req: any, res: any, next: any) => {

    const {city} = req.body

    const amadeus = new Amadeus({
         clientId: process.env.ASADEUS_KEY,
        clientSecret: process.env.ASADEUS_SECRET_KEY
         });
          
    amadeus.referenceData.locations.hotels.byCity.get({
    cityCode: city
    }).then(function (response : any){
        res.status(201).send({hotels : response})
    }).catch(function (response : any){
        console.log(response)
    })
     
    res.status(201)
         })

app.listen(
    PORT,
    () => console.log(`it works on http:localhost:${PORT}`)
)
