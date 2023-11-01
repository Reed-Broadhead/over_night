import { describe } from "node:test";

require("dotenv").config()
const express = require("express");
const PORT = 5555
const { PrismaClient } = require('@prisma/client');
const bcrypt = require("bcrypt")
const cookieParser = require('cookie-parser')
const axios = require('axios');
const { createHash }= require('crypto');

// const hotel = await prisma.hotels.findUnique({ where: { id: hotelId }, include: { citys: true, address: true } });

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
         

    app.post('/hotelSearch', async (req: any, res: any, next: any) => {

        const {city} = req.body
        console.log(city)

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

        let data = '';
        
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels?fields=all&language=ENG&from=1&to=15&useSecondaryLanguage=false&destinationCode=BOS`,
          headers: { 
            'Api-key': process.env.API_KEY, 
            'X-Signature': signature, 
            'Accept': 'application/json', 
            'Accept-Encoding': process.env.ACCEPT_ENCODING, 
            'Secret': process.env.SECRET_KEY
          },
          data : data
        };
        
        axios.request(config)
        .then((response : any) => {
            res.status(201).send(JSON.stringify(response.data))
        //   console.log(JSON.stringify(response.data))
        })
        .catch((error : any) => {
          console.log(error);
        });


        
        
                //  hotel avilabilaty

            // let data = JSON.stringify({
            //     "stay": {
            //       "checkIn": "2023-10-15",
            //       "checkOut": "2023-10-16"
            //     },
            //     "occupancies": [
            //       {
            //         "rooms": 1,
            //         "adults": 2,
            //         "children": 0
            //       }
            //     ],
            //     "filter": {
            //       "maxRooms": 5
            //     },
            //     "hotels": {
            //       "hotel": [
            //         77,
            //         168,
            //         264,
            //         265,
            //         297,
            //         311
            //       ]
            //     }
            //   });
              
            //   let config = {
            //     method: 'post',
            //     maxBodyLength: Infinity,
            //     url: 'https://api.test.hotelbeds.com/hotel-api/1.0/hotels',
            //     headers: { 
            //     'Api-key': process.env.API_KEY, 
            //     'X-Signature': signature, 
            //     'Accept': 'application/json', 
            //     'Accept-Encoding': process.env.ACCEPT_ENCODING, 
            //     'Secret': process.env.SECRET_KEY,
            //     'Content-Type': 'application/json'
            //     },
            //     data : data
            //   };

            //   axios.request(config)
            //   .then((response : any) => {
            //     res.status(201).send(JSON.stringify(response.data))
            //   })
            //   .catch((error : any) => {
            //     console.log(error, "failed");
            //   });


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
        // code: 34494,
        // name: [Object],
        // description: [Object],
        // countryCode: 'US',
        // stateCode: 'MA',
        // destinationCode: 'BOS',
        // zoneCode: 5,
        // coordinates: [Object],
        // categoryCode: '4EST',
        // categoryGroupCode: 'GRUPO4',
        // chainCode: 'MARIO',
        // accommodationTypeCode: 'H',
        // boardCodes: [Array],
        // segmentCodes: [Array],
        // address: [Object],
        // postalCode: '2139',
        // city: [Object],
        // phones: [Array],
        // rooms: [Array],
        // facilities: [Array],
        // images: [Array],
        // lastUpdate: '2023-07-26',
        // S2C: '3*',
        // ranking: 101
    interface Content {
        content: string,
        languageCode: string
    }
    interface Data {
        S2C: string,
        accommodationTypecode?: string
        address: Content,
        chainCode?: string,
        city: Content,
        code: number,
        coordinates?: {
            latitude?: number,
            longitude?: number
        },
        countryCode: string,
        description: Content,
        destinationCode: string,
        // facilities?: array[obj]
        images?: {
            imageTypeCode?: string,
            order?: number,
            path?: string,
            visualOrder?: number
        }[],
        lastUpdate: string
        name: Content,
        nameId: number,
        phones?: {
            phoneNumber?: string,
            phoneType?: string
        }[]
        postalCode?: string,
        ranking: number,
        rooms?: {
            roomCode?: string,
            description?: string,
            roomStays?: {
                description?: string,
                order?: string,
                stayType?: string
            }[]
            roomType?: string,
        }[],
        statesCode?: string,
        web?: string,
        zoneCode?: number
    }


    app.get('/getBatchData', async (req: any, res: any, next:any)=>{
       
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

        let data = '';

        // const user = await prisma.user.create({ 
        //     data: {
        //         username: username,
        //         password: hashedPassword,
        //         email: email,
        //         address:address
        //     },
        // })

        const storeData = async (hotelSet: Data[]) => {
            console.log("uploading data to databass...")
                for (const hotelData of hotelSet) {

                const address = await prisma.apiContent.create({
                    data: {
                        content: hotelData.address.content,
                        languageCode: hotelData.address.languageCode || null
                    }
                })
                
                const city = await prisma.apiContent.create({
                    data: {
                        content: hotelData.city.content,
                        languageCode: hotelData.city.content || null
                    }
                })

                const description = await prisma.apiContent.create({
                    data: {
                        content: hotelData.description.content,
                        languageCode: hotelData.description.languageCode || null
                    }
                })

                const name = await prisma.apiContent.create({
                    data: {
                        content: hotelData.name.content,
                        languageCode: hotelData.name.languageCode || null
                    }
                })

                const coordinates = await prisma.coordinates.create({
                    data: {
                        latitude: hotelData.coordinates?.latitude,
                        longitude: hotelData.coordinates?.longitude
                    }
                })
                const hotel = await prisma.hotels.create({
                    data: {
                        S2C: hotelData.S2C || null,
                        accommodationTypeCode: hotelData.accommodationTypecode || null,
                        addressId: address.id || null,
                        chainCode: hotelData.chainCode || null,
                        cityId: city.id || null,
                        code: hotelData.code || null,
                        coordinatesId: coordinates.id || null,
                        countryCode: hotelData.countryCode || null,
                        descriptionId: description.id || null,
                        destinationCode: hotelData.destinationCode || null,
                        lastUpdate: hotelData.lastUpdate || null,
                        nameRef: name.id || null,
                        nameId: hotelData.nameId || null,
                        postalCode: hotelData.postalCode || null,
                        ranking: hotelData.ranking || null,
                        statesCode: hotelData.statesCode || null, 
                        web: hotelData.web || null,
                        zoneCode: hotelData.zoneCode || null,
                    }
                })

                if (hotelData.images){
                for (const image of hotelData.images){
                    await prisma.images.create({
                        data: {
                            imageTypeCode: image.imageTypeCode || null,
                            order: image.order || null,
                            path: image.path || null,
                            visualOrder: image.visualOrder || null,
                            hotelId : hotel.id
                        }
                    })
                }}
                
                if (hotelData.phones){
                    for (const phone of hotelData.phones){
                        await prisma.phones.create({
                            data: {
                                phoneNumber: phone.phoneNumber,
                                phoneType: phone.phoneNumber,
                                hotelId: hotel.id
                            }
                        })
                    }
                }
             
                if (hotelData.rooms){
                    for(const room of hotelData.rooms){
                        const currentRoom = await prisma.rooms.create({
                            data: {
                                roomCode: room.roomCode,
                                description: room.description ||null,
                                roomType: room.roomType || null,
                                hotelsId: hotel.id
                            }
                        })
                        if(room.roomStays){
                            for(const stay of room.roomStays){
                                await prisma.roomStays.create({
                                    data:{
                                        description: stay.description || null,
                                        order: stay.order || null,
                                        stayType: stay.stayType || null,
                                        roomId: currentRoom.id
                                    }
                                })
                            }
                        }
                    }
                }
            console.log("data uploaded!")
            }}  

        let n = 1

        for (let i = 0; i < 8; i++){
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels?fields=all&language=ENG&from=${n}&to=${n+5}&useSecondaryLanguage=false&destinationCode=NYC`,
          headers: { 
            'Api-key': process.env.API_KEY, 
            'X-Signature': signature, 
            'Accept': 'application/json', 
            'Accept-Encoding': process.env.ACCEPT_ENCODING, 
            'Secret': process.env.SECRET_KEY
          },
          data : data
        };
        
       
        axios.request(config)
        .then((response : any) => {
            // res.status(201).send(JSON.stringify(response.data))
            res.status(201).send(storeData(response.data.hotels))
            // storeData(response.data)
        })
        .catch((error : any) => {
          console.log(error + " fetch");
        });  n = n + 10 };


        }
    )

interface City{
        "boston":string,
        "new york":string 
    }

const citiesList = {
    "boston":"BOS",
    "new york":"NYC",
    
}


    app.post('/getHotelsByCity', async (req: any, res: any)=>{
        
        const {cityName} = req.body
        const search =  cityName.toLowerCase() == "boston" ? "BOS" : "NYC"
        try{
            const hotels = await prisma.hotels.findMany({
                where:{destinationCode:search.toLowerCase()},
                include:{
                    city:true,
                    phones:true,
                    rooms:{
                        include:{
                            roomStays:true,
                        }
                    },
                    description:true,
                    address:true,
                    coordinates:true,
                    images:true,
                }
        
            })
            res.json(hotels)
        }
        catch(error:any){res.json(error.message)}
    })


app.listen(
    PORT,
    () => console.log(`it works on http:localhost:${PORT}`)
)


