//Importing all the required functions from the various methods that are defined to run the frontend quries for the users.

import { new_trend } from "./trending.js"
import { new_top } from "./popular.js"
import { new_A } from "./newarrival.js"


const trend = document.getElementById('trend')
const top = document.getElementById('top')
const newA = document.getElementById('newA')


//when user searches for the trending movies.
trend.addEventListener('click' , (e)=>{
    new_trend()
})

//when the user searched for the top rated movies.
top.addEventListener('click',(e)=>{
   new_top()
})

//when the user searches for the new Arrivals.
newA.addEventListener('click' , (e)=>{
 new_A()
})
