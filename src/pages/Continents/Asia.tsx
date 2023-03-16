import { About } from '@/components/Continents/About';
import { Card } from '@/components/Continents/Card';
import { Header } from '@/components/Header';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';

const Europe = () => {
  return (
    <>
      <Header />

      <Box
        backgroundImage='https://images.unsplash.com/photo-1617469165786-8007eda3caa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
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
          Asia
        </Heading>
      </Box>

      <About
        aboutText='A Ásia é o maior continente em área terrestre do mundo, estando boa parte do continente localizado no Hemisfério Norte. Além de ser o mais extenso, é também o mais populoso, habitando nele cerca de três quintos da população mundial.'
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
          image='https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          country='Japão'
          city='Tokyo'
          flag='https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        />
        <Card
          image='https://images.unsplash.com/photo-1617541086271-4d43983704bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
          country='Coreia do Sul'
          city='Seul'
          flag='https://images.unsplash.com/photo-1617541086271-4d43983704bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
        />
        <Card
          image='https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
          country='Tailândia'
          city='Bangkok'
          flag='https://images.unsplash.com/photo-1563492065599-3520f775eeed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
        />
        <Card
          image='https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
          country='Turquia'
          city='Istambul'
          flag='https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
        />
      </Flex>
    </>
  );
};

export default Europe;
