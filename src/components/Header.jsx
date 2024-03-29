import SearchBar from "./searchbar/SeachBar";
import './Header.css';
import MainMenu from './MainMenu'

import { Flex, Button} from '@chakra-ui/react';

import { FaUser, FaBuilding, FaSearch } from 'react-icons/fa';

import { Select } from '@chakra-ui/react'


export default function Header() {
    return (
        <>
        <div className="header">
            <SearchBar/>

    
            <Flex alignItems="center" p={4} bg="white" justifyContent="flex-start">
            <Select placeholder='Yelp For Business' _hover={{ bg: 'gray.200', cursor: 'pointer'}} color="Black" mr={30} bg="transparent">
        <option value='option1'>
          <FaUser style={{ marginRight: "5px" }} /> Login into Business Account
        </option>
        <option value='option2'>
          <FaBuilding style={{ marginRight: "5px" }} /> Claim Your Business
        </option>
        <option value='option3'>
          <FaSearch style={{ marginRight: "5px" }} /> Explore Yelp For Business
        </option>
      </Select>
      <Button colorScheme='blue' _hover={{ bg: 'blue.600', cursor: "pointer" }} mr={10}>Write an Article </Button>
      <Button colorScheme='blue' _hover={{ bg: 'blue.600' }} mr={10} color="White">Login</Button>
      <Button colorScheme='blue' _hover={{ bg: 'purple.500' }} mr={10} color="White">Register</Button>
          </Flex>
           <MainMenu />      
        </div>
        </>
        
    )
}