import Restaurants from "./Restaurants";

const RestaurantsList = () => {
  return (
    <div>
      <h2>Restaurants</h2>
      <ul>
        {Restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <h3>{restaurant.name}</h3>
            <img src={restaurant.image_URL} alt={restaurant.name} style={{ maxWidth: '200px' }} />
            <p>Rating: {restaurant.rating}</p>
            <p>
              Address: {restaurant.location.address}, {restaurant.location.city}, {restaurant.location.state},{' '}
              {restaurant.location.zip_code}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantsList;