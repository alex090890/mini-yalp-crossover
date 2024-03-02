import axios from "axios"

export  const  restaaurants =async ()=>{
    return axios.get(`https://mini-yelp-ba.onrender.com/miniYelp/restaurant/all`)
    .then((response) =>{
        if(response.data){
            return (response.data)
        }
    })
} 

export  const  restaurant_city =async (city)=>{
    return axios.get(`https://mini-yelp-ba.onrender.com/miniYelp/restaurant/getByCity?city=${city}`)
    .then((response) =>{
        if(response.data){
            return (response.data)
        }
    })
} 
  
export  const  restaurant_tag =async (tag)=>{
    return axios.get(`https://mini-yelp-ba.onrender.com/miniYelp/restaurant/getByTag?tag=${tag}`)
    .then((response) =>{
        if(response.data){
            return (response.data)
        }
    })

} 





  