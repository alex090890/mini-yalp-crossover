import './MainMenu.css'; // Import the CSS file

const MainMenu = () => {
  return (
    <nav>
      <ul className="nav">
        <li>
          <a href="/" className='bcdcd'>Restaurants</a>
          <div className="dropdown">
            <ul>
              <li><a href="#">To pick up</a></li>
              <li><a href="#">Citizens</a></li>
              <li><a href="#">Chinese</a></li>
              <li><a href="#">Italian</a></li>
              <li><a href="#">Reservations</a></li>
              <li><a href="#">Mexican</a></li>
              <li><a href="#">Thai</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="/" className='bcdcd'>Craft services</a>
          <div className="dropdown">
            <ul>
              <li><a href="#">Construction company</a></li>
              <li><a href="#">Electrician</a></li>
              <li><a href="#">Cleaning company</a></li>
              <li><a href="#">Plumber</a></li>
              <li><a href="#">Heating construction & air conditioning technology</a></li>
              <li><a href="#">Landscaping</a></li>
              <li><a href="#">Locksmith servicesy</a></li>
              <li><a href="#">Moving company</a></li>
              <li><a href="#">Installers</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="/" className='bcdcd'>Around the car</a>
          <div className="dropdown">
            <ul>
              <li><a href="#">Auto repair shop</a></li>
              <li><a href="#">Car wash</a></li>
              <li><a href="#">Car detailing</a></li>
              <li><a href="#">Paint shop & body shop</a></li>
              <li><a href="#">Car wash</a></li>
              <li><a href="#">Car dealer</a></li>
              <li><a href="#">Oil change</a></li>
              <li><a href="#">Parking spaces</a></li>
              <li><a href="#">Towing service</a></li>
            </ul>
          </div>
        </li>
        <li><a href="/" className='bcdcd'>More</a></li>
      </ul>
    </nav>
  );
};

export default MainMenu;
