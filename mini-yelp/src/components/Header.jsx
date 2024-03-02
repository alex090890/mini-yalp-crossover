import './Header.css';
import MainMenu from './MainMenu'
import { Box, Flex, Heading, Button} from '@chakra-ui/react';
import { Select } from '@chakra-ui/react'


export default function Header() {
    return (
        <>
        <div className="header">
            <h1>Hello There</h1>
            <Flex alignItems="center" p={4}>
      
      <Select placeholder='Yelp For Business' _hover={{ bg: 'gray.200', cursor: 'pointer'}} >
        <option value='option1'>Login into Business Account</option>
        <option value='option2'>Claim Your Business</option>
        <option value='option3'>Explore Yelp For Business</option>
      </Select>
      <Button colorScheme='blue' _hover={{ bg: 'blue.600', cursor: "pointer" }} ml={4}>Write an Article</Button> 
      <Button colorScheme='blue' _hover={{ bg: 'blue.600' }} mr={4}>Login</Button>
      <Button colorScheme='blue' _hover={{ bg: 'blue.600' }} mr={4}>Register</Button>
    </Flex>  
            

        </div>
        </>
        
    )
}