import {
    FormControl,
    Select,Grid,GridItem
  } from '@chakra-ui/react'

  const SearchBar = () => {
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
  <Select placeholder='things to do'>
    <option></option>
    <option></option>
  </Select>
</FormControl>
  </GridItem>
  <GridItem colSpan={2}>
  <FormControl>
  <Select placeholder='address, neighborhood, city,state,or zip code'>
    <option>United Arab Emirates</option>
    <option>Nigeria</option>
  </Select>
</FormControl>
  </GridItem>
</Grid>

        
       

        </>
     );
  }
   
  export default SearchBar;