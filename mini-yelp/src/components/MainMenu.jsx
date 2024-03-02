import { useState } from 'react';

const MainMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav>
      <ul className="nav">
        <li><a href="/" onClick={toggleDropdown}>Restaurants</a>
          {dropdownOpen && (
            <ul className="dropdown">
              <li><a href="#">Option 1</a></li>
              <li><a href="#">Option 2</a></li>
              <li><a href="#">Option 3</a></li>
            </ul>
          
        )}
        </li>
        <li>
          <a href="#" onClick={toggleDropdown}>Craft services</a>
          {dropdownOpen && (
            <ul className="dropdown">
              <li><a href="#">Option 1</a></li>
              <li><a href="#">Option 2</a></li>
              <li><a href="#">Option 3</a></li>
            </ul>
          )}
        </li>
        <li><a href="#">Around the car</a></li>
        <li><a href="#">More</a></li>
      </ul>
    </nav>
  );
};

export default MainMenu;
