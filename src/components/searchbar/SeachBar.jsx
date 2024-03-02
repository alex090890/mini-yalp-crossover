import {FormControl,Select,Grid,GridItem,Button} from '@chakra-ui/react'
import {restaurant_city
} from '../../services/Services'
import { useEffect, useState } from 'react';
import './searchbar.css'

  const SearchBar = () => {
    const [restaurant, SetRestaurant] = useState();
    const [fiterRestaurant, setFilterRestaurant] = useState([]);
    const [showCategory, setShowCategory] = useState(false);

    const GetRestaurantCatalog = () =>{
        dummy_restaurants().then((data) => {
            console.log(data);
            SetRestaurant(data)
        })  
        }
 const searchByName = (paramFilter)=> {  
  if (paramFilter.length > 0) {
    restaurant_city(paramFilter).then((data) => {
      console.log(data);
    setFilterRestaurant(data) 
     }) 
  }else{
    setFilterRestaurant([]);
  }  

 }


useEffect(() => {
}, [])
    return ( 
        <>
        
       
        <Grid
  h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>
  <GridItem rowSpan={2} colSpan={1}>
  <img src="../public/Yelp_Logo.svg.png" alt="" />
  </GridItem>
  <GridItem colSpan={2} >

<FormControl className='formRest'>
<div className='search_container'>
  <div className='flex_columns'>
  <input key="input_2" type='text' placeholder='Thigs to do'
  onClick={()=>setShowCategory(true)}
  onMouseLeave={()=>setShowCategory(false)}
  ></input>
  {showCategory ?   <ul>
    <li>Restaurant</li>
    <li>Elektris</li>
    <li>Plumber</li>
  </ul> : <></> }



  </div>
  <div className='flex_columns'>
  <input type='text' placeholder='address, neighborhood, city,state,or zip code'
  onKeyDown={(e) => {
    searchByName(e.target.value);
    }} 
  ></input>

  <ul>
    {fiterRestaurant.map((item)=>{
     return <li key={item._id}>{item.name}</li>
    })}
  </ul>

  </div>

  
  </div>
 
</FormControl>


  </GridItem>

</Grid>

        
       

        </>
     );
  }
   
  export default SearchBar;