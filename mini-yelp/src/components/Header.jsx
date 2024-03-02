import SearchBar from "./searchbar/SeachBar";
import './Header.css';
import MainMenu from './MainMenu'
import {  Flex, Button} from '@chakra-ui/react';
import { Select } from '@chakra-ui/react'


export default function Header() {
    return (
        <>
        <div className="header">
            <SearchBar/>
            <Flex alignItems="center" p={4} bg="white">
            <Flex alignItems="center" p={4} bg="white" justifyContent="flex-start">
      <Select placeholder='Yelp For Business' _hover={{ bg: 'gray.200', cursor: 'pointer'}} color="white" mr={30} bg="transparent">
        <option value='option1'>Login into Business Account</option>
        <option value='option2'>Claim Your Business</option>
        <option value='option3'>Explore Yelp For Business</option>
      </Select>
      <Button colorScheme='blue' _hover={{ bg: 'blue.600', cursor: "pointer" }} mr={10}>Write an Article </Button>
      <Button colorScheme='blue' _hover={{ bg: 'blue.600' }} mr={10} color="Blue">Login</Button>
      <Button colorScheme='blue' _hover={{ bg: 'red.500' }} mr={10} color="Blue">Register</Button>
    </Flex>    
        </div>
        </>
        
    )
}