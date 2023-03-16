import { About } from '@/components/Continents/About';
import { Card } from '@/components/Continents/Card';
import { Header } from '@/components/Header';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';

const Europe = () => {
  return (
    <>
      <Header />

      <Box
        backgroundImage='https://images.unsplash.com/photo-1588001400947-6385aef4ab0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
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
          Oceania
        </Heading>
      </Box>

      <About
        aboutText='A Oceania é um continente situado entre os oceanos Índico e Pacífico, a sudeste da Ásia. A maior parte de suas terras fica no Hemisfério Sul do planeta. É composto por 14 países e ilhas e territórios pertencentes a outros países, tanto oceânicos quanto de outros continentes.'
        amountCities={27}
        amountCountries={50}
        amountLanguages={60}
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
          image='https://images.unsplash.com/photo-1510546020578-a35ae9fcfb0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1504&q=80'
          country='Austrália'
          city='Camberra'
          flag='https://images.unsplash.com/photo-1510546020578-a35ae9fcfb0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1504&q=80'
        />
        <Card
          image='https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80'
          country='Austrália'
          city='Sydney'
          flag='https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80'
        />
        <Card
          image='https://images.unsplash.com/photo-1577940855479-63ea3d0cfa6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          country='Nova Zelândia'
          city='Auckland'
          flag='https://images.unsplash.com/photo-1577940855479-63ea3d0cfa6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        />
        <Card
          image='https://images.unsplash.com/photo-1560237731-890b122a9b6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          country='Nova Zelândia'
          city='Christchurch'
          flag='https://images.unsplash.com/photo-1560237731-890b122a9b6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        />
      </Flex>
    </>
  );
};

export default Europe;
