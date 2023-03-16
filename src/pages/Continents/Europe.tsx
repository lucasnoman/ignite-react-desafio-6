import { About } from '@/components/Continents/About';
import { Card } from '@/components/Continents/Card';
import { Header } from '@/components/Header';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';

const Europe = () => {
  return (
    <>
      <Header />

      <Box
        backgroundImage='../continents/europe/uk/bigbang.png'
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
          Europe
        </Heading>
      </Box>

      <About
        aboutText='A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste'
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
          image='../continents/europe/uk/londres.jpg'
          country='Reino Unido'
          city='Londres'
          flag='../continents/europe/uk/uk_flag.png'
        />
        <Card
          image='../continents/europe/france/paris.jpg'
          country='França'
          city='Paris'
          flag='../continents/europe/france/fr_flag.webp'
        />
        <Card
          image='../continents/europe/italy/rome.jpg'
          country='Itália'
          city='Roma'
          flag='../continents/europe/italy/it_flag.jpg'
        />
        <Card
          image='../continents/europe/rep_tchq/prague.jpg'
          country='República Tcheca'
          city='Praga'
          flag='../continents/europe/rep_tchq/re_tq_flag.png'
        />
        <Card
          image='../continents/europe/holand/amsterdan.jpg'
          country='Holanda'
          city='Amsterdã'
          flag='../continents/europe/holand/hd_flag.png'
        />
      </Flex>
    </>
  );
};

export default Europe;
