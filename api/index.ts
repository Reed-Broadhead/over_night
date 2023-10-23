require("dotenv").config()
const express = require("express");
const PORT = 5555
const { PrismaClient } = require('@prisma/client');
const bcrypt = require("bcrypt")
const cookieParser = require('cookie-parser')
const axios = require('axios');
const { createHash }= require('crypto');



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
            res.cookie('user', user.email)
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


    app.get('/tripadvisor', async (req: any, res: any) => {
       
            const options = {
                method: 'GET',
                url: `https://api.content.tripadvisor.com/api/v1/location/search?key=${process.env.TRIP_ADVISOR_KEY}&searchQuery=miami&language=en`,
                headers: {
                    'X-TripAdvisor-API-Key': process.env.TRIP_ADVISOR_KEY,
                    'Accept': 'application/json',
                  }
              };
              
              axios
                .request(options)
                .then(function (response: any) {
                    res.status(201).send({hotels : response.data})
                })
                .catch(function (error: any) {
                    res.status(500).send({ error: 'Internal server error' }) 
                    console.error(error)
                });
               
          });
          
    app.get('/getSixStars', async (req: any, res: any, next: any) => {
        try{
        const sixStarhotels = await prisma.sixStars.findMany({})
        res.json(sixStarhotels)
        } catch(error: any) {
            // res.status(500).send({message: error})
            next(error.message);
        }
        
    })
         

    app.get('/hotelSearch', async (req: any, res: any, next: any) => {

        const apiKey: string | undefined = process.env.API_KEY;
        const secret: string | undefined = process.env.SECRET_KEY;
        if (!apiKey || !secret) {
            console.error("API_KEY and/or SECRET_KEY not defined in environment variables.");
            process.exit(1);
          }

          const timestamp = Math.floor(Date.now() / 1000);
          const dataToHash = apiKey + secret + timestamp.toString();
          const signature = createHash('sha256')
          .update(dataToHash)
          .digest('hex');

            //  hotel list 

        // let data = '';
        
        // let config = {
        //   method: 'get',
        //   maxBodyLength: Infinity,
        //   url: 'https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels?fields=all&language=ENG&from=1&to=15&useSecondaryLanguage=false&destinationCode=BOS',
        //   headers: { 
        //     'Api-key': process.env.API_KEY, 
        //     'X-Signature': signature, 
        //     'Accept': 'application/json', 
        //     'Accept-Encoding': process.env.ACCEPT_ENCODING, 
        //     'Secret': process.env.SECRET_KEY
        //   },
        //   data : data
        // };
        
        // axios.request(config)
        // .then((response : any) => {
        //     res.status(201).send(JSON.stringify(response.data))
        // //   console.log(JSON.stringify(response.data))
        // })
        // .catch((error : any) => {
        //   console.log(error);
        // });
        
        
                //  hotel avilabilaty

            let data = JSON.stringify({
                "stay": {
                  "checkIn": "2023-10-15",
                  "checkOut": "2023-10-16"
                },
                "occupancies": [
                  {
                    "rooms": 1,
                    "adults": 2,
                    "children": 0
                  }
                ],
                "filter": {
                  "maxRooms": 5
                },
                "hotels": {
                  "hotel": [
                    77,
                    168,
                    264,
                    265,
                    297,
                    311
                  ]
                }
              });
              
              let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://api.test.hotelbeds.com/hotel-api/1.0/hotels',
                headers: { 
                'Api-key': process.env.API_KEY, 
                'X-Signature': signature, 
                'Accept': 'application/json', 
                'Accept-Encoding': process.env.ACCEPT_ENCODING, 
                'Secret': process.env.SECRET_KEY,
                'Content-Type': 'application/json'
                },
                data : data
              };

              axios.request(config)
              .then((response : any) => {
                res.status(201).send(JSON.stringify(response.data))
              })
              .catch((error : any) => {
                console.log(error, "failed");
              });


        // res.status(201).send({message: "kinda works"})
    })

    app.get('/getCitys', async (req: any, res: any, next: any) => {
        try{
        const citys = await prisma.citys.findMany({})
        res.json(citys)
        } catch(error: any) {
            // res.status(500).send({message: error})
            next(error.message);
        }
        
    })

app.listen(
    PORT,
    () => console.log(`it works on http:localhost:${PORT}`)
)


