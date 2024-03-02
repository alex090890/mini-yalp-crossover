import { useState, useEffect } from "react";
import axios from 'axios';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading } from '@chakra-ui/react';
import "./RestaurantsList.css";

const RestaurantsList = () => {
  const [restaurants, setRestaurants] = useState([]);
  
  useEffect(() => { 
    const fetchData = async () => {
      try {
        const response = await axios.get('https://mini-yelp-ba.onrender.com/miniYelp/restaurant/all');
        setRestaurants(response.data.allRestaurants);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div>
      <h1 className="restaurantsHeader">Restaurants</h1>
      <div>
        {restaurants.map((restaurant) => (
          <Card key={restaurant.id} direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' className="restaurantCard">
            {restaurant.image_URL && (
              <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src={restaurant.image_URL} alt={restaurant.name} style={{ maxWidth: '200px' }}/>
            )}
            <Stack>
              <CardHeader>
                <Heading size="md">{restaurant.name}</Heading>
              </CardHeader>
              <CardBody>
                <p>
                  Address: {restaurant.location.address}, {restaurant.location.city}, {restaurant.location.state},{' '}
                  {restaurant.location.zip_code}
                </p>
                <p>Rating: {restaurant.rating}</p>
              </CardBody>
              <CardFooter className="cardfooter">
                <h3>Reviews:</h3><br/><br/>
                {restaurant.reviews.map((review, index) => (
                  
                  <ul key={index} >
                    <li className="userreviews"><b> {review.user_id} wrote: </b>  {review.text}</li>
                  </ul>
                ))}
              </CardFooter>
            </Stack>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default RestaurantsList;
