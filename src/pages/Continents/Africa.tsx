import { About } from '@/components/Continents/About';
import { Card } from '@/components/Continents/Card';
import { Header } from '@/components/Header';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';

const Europe = () => {
  return (
    <>
      <Header />

      <Box
        backgroundImage='../continents/africa/AFRICA.jpg'
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
          Africa
        </Heading>
      </Box>

      <About
        aboutText='África é um dos seis continentes do mundo, sendo o terceiro maior em extensão territorial. O território estende-se por mais de 30 milhões de km², ocupando, aproximadamente, 20% da área continental da Terra.'
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
          image='../continents/africa/cidade_do_cabo.jpg'
          country='Reino Unido'
          city='Londres'
          flag='../continents/africa/cidade_do_cabo.jpg'
        />
        <Card
          image='../continents/africa/durban.jpg'
          country='França'
          city='Paris'
          flag='../continents/africa/durban.jpg'
        />
        <Card
          image='../continents/africa/joanesburgo.jpg'
          country='Itália'
          city='Roma'
          flag='../continents/africa/joanesburgo.jpg'
        />
        <Card
          image='../continents/africa/luanda.webp'
          country='República Tcheca'
          city='Praga'
          flag='../continents/africa/luanda.webp'
        />
        <Card
          image='../continents/africa/nairobi.jpg'
          country='Holanda'
          city='Amsterdã'
          flag='../continents/africa/nairobi.jpg'
        />
      </Flex>
    </>
  );
};

export default Europe;
