import { Box, Flex, Spacer } from '@chakra-ui/react';

import './Footer.css'

  const Footer = () => {
    return ( 
        <>
        <div className='divFooter'>
  <div className='footerContainer'>
 

  <Flex>
    <Box w='150px' h='10' >
      <h3>About</h3>
      <a href="#About Yelp">About Yelp <br/>  </a> 
      <a href="#Jobs">Jobs <br/> Press</a> 
      <a href="#rust & Safety">rust & Safety<br/> </a> 
      <a href="#Content guidelines">Content guidelines<br/> </a> 
      <a href="#Terms of use & imprint">Terms of use & imprint <br/> </a> 
      <a href="#Privacy policy">Privacy policy <br/> </a> 
      <a href="#AdChoices">AdChoices <br/> </a> 
      <a href="#Manage cookies">Manage cookies</a> 
    </Box>
    <Spacer />
    <Box w='170px' h='10' >
      <h3>Discover</h3>
      <a href="#Collections">Collections <br/> </a> 
      <a href="#Forum">Forum <br/> </a> 
      <a href="#Events">Events <br/> </a> 
      <a href="#rust & Safety">Help <br/> </a> 
      <a href="#Yelp on'm mobile phone">Yelp on the mobile phone  <br/></a> 
      <a href="#Developers">Developers <br/></a> 
      <a href="#RSS">RSS<br/></a> 
      <a href="#Manage cookies">Manage cookies <br/></a> 
    </Box>
    <Spacer />
    <Box w='180px' h='10' >
      <h3>Yelp for Business</h3>
      <a href="#Yelp for Business">Yelp for Business <br/> </a> 
      <a href="#Business Owner Login">Business Owner Login <br/> </a> 
      <a href="#Apply your Yelp entry">Apply your Yelp entry <br/> </a> 
      <a href="#Advertising on Yelp">Advertising on Yelp <br/> </a> 
      <a href="#THelp for business owners">Help for business owners  <br/></a> 
      <a href="#Yelp Blog for Business">Yelp Blog for Business <br/></a>
    </Box>
    <Spacer />
    <Box w='180px' h='10'>
      <h3>Languages</h3>
      <a href="#English">English <br/> </a> 
      <h3>Countries</h3>
      <a href="#Germay">Germany <br/> </a> 
    </Box>

  </Flex>



  </div>

  <p className='copyright'>Copyright {new Date().getFullYear()}- {new Date().getFullYear()} Yelp </p>
</div>

        </>
     );
  }

  export default Footer;