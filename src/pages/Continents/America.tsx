import { About } from '@/components/Continents/About';
import { Card } from '@/components/Continents/Card';
import { Header } from '@/components/Header';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';

const Europe = () => {
  return (
    <>
      <Header />

      <Box
        backgroundImage='../continents/america/AMERICA.jpg'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        h='500px'
        w='100vw'
        display='flex'
        alignItems='end'
      >
        <Heading
          w='1160px'
          mb='59px'
          color='light.200'
          mx='auto'
          fontWeight={600}
        >
          America
        </Heading>
      </Box>

      <About
        aboutText='América é o maior continente em extensão norte–sul localizado no Hemisfério Ocidental e compreende uma área total de 42.189.120 km2. O continente é habitado por cerca de 902.892.047 pessoas, e nele são faladas diversas línguas, como espanhol, inglês, português, francês, neerlandês e línguas nativas.'
        amountCities={8}
        amountCountries={54}
        amountLanguages={2000}
      />

      <Heading
        as='h2'
        w='1160px'
        mx='auto'
        fontWeight='500'
        fontSize='36px'
        lineHeight='54px'
        mt='80px'
      >
        Cidades +100
      </Heading>

      <Flex w='1160px' mx='auto' wrap='wrap' gap='45px' my='40px'>
        <Card
          image='../continents/america/ny.jpg'
          country='Reino Unido'
          city='Londres'
          flag='../continents/america/ny.jpg'
        />
        <Card
          image='../continents/america/rio.jpg'
          country='França'
          city='Paris'
          flag='../continents/america/rio.jpg'
        />
        <Card
          image='../continents/america/santiago.jpg'
          country='Itália'
          city='Roma'
          flag='../continents/america/santiago.jpg'
        />
        <Card
          image='../continents/america/vancouver.jpeg'
          country='República Tcheca'
          city='Praga'
          flag='../continents/america/vancouver.jpeg'
        />
      </Flex>
    </>
  );
};

export default Europe;
