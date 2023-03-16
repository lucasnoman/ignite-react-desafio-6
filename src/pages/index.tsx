import { Banner } from '@/components/Banner';
import { Carousel } from '@/components/Carousel';
import { Header } from '@/components/Header';
import { TravelTypes } from '@/components/TravelTypes';
import { Box, Divider, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box mb='40px'>
      <Header mainPage />
      <Banner />
      <TravelTypes />
      <Divider w='90px' borderColor='dark.600' mx='auto' />
      <Heading
        as='h2'
        fontWeight='500'
        fontSize='2.25rem'
        lineHeight='54px'
        my='52px'
        textAlign='center'
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>
      <Carousel />
    </Box>
  );
}
