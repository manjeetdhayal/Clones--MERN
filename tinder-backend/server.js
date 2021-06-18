import express from 'express'
import mongoose from 'mongoose'
import Cards from "./dbcards.js";
import Cors from "cors";

//app config
//--------------------
//creating a instance
const app =express ();
const port =process.env.PORT || 8001

const connection_url=`mongodb+srv://admin:aWdtNrA6iHHaY5Sf@cluster0.wxeqq.mongodb.net/tinder?retryWrites=true&w=majority`


//------------------

//middlewares-------
app.use(express.json());
app.use(Cors());


//db config-------

mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true,
})

//API Endpoints---------------
app.get('/',(req, res)=> res.status(200).send("hello you are there"));

app.post('/tinder/cards',(req , res)=>{
    const dbcard = req.body;

    Cards.create(dbcard, (err, data)=>{
        if(err) {
            res.status(500).send(err)  //response server error 500
        }
        else 
        res.status(201).send(data) 
    })
});

//create a endpoint that gets the data to retrive all the data in database we stored 
app.get('/tinder/cards',(req , res)=>{
  
    Cards.find((err, data)=>{
        if(err) {
            res.status(500).send(err)  //response server error 500
        }
        else 
        res.status(200).send(data)  //200 status on success
    })
});


//listener-------------------

app.listen(port, ()=>console.log(`listening on localhost: ${port}`));