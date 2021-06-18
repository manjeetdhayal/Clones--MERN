//import { Divider, SwipeableDrawer } from '@material-ui/core'
import React, { useState, useEffect } from 'react';
import TinderCard from "react-tinder-card";
//install module by=> $ npm install --save react-tinder-card --legacy-peer-deeps 
import "./tinderCards.css";
import axios from 'axios';

function TinderCards() {

    const [people, setPeople] = useState([ ]);

    useEffect(()=>
    {
        async function fetchData() {
            const req = await axios.get("/tinder/cards"); //getting data from our end point 

            //setpeople to request data
            setPeople(req.data);

        }

        fetchData();
    },[]);
    console.log(people)


    const Swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen !");
    };

    return (<div className="tindercards">

        <div className="tinderimages">

            {people.map((person) => (   // use to map every single person present in the array people 
                <TinderCard
                    className="swipe "
                    key={person.name}
                    perventSwipe={["up", "down"]}  //prevent from sliding 
                    onSwipe={(dir) => Swiped(dir, person.name)} //function that tells what happen on swiping 
                    onCardLeftScreen={
                        () => outOfFrame(person.name)  // funtion that tells what happen on when card move out of frame 
                    }
                >

                    <div
                        style={{ backgroundImage: `url(${person.imgUrl})` }}
                        className="card">
                        <h3>{person.name}</h3>
                    </div>

                </TinderCard>
            ))}
        </div>

    </div>
    );
}

export default TinderCards;