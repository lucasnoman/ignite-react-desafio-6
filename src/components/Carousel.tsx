import { Box, Heading, Image, Link, Text } from '@chakra-ui/react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const continents = [
  {
    page: '/Continents/Europe',
    imageDir: './carousel/europe.png',
    name: 'Europe',
    someText: 'O continente mais antigo',
  },
  {
    page: '/Continents/Asia',
    imageDir: './carousel/asia.jpg',
    name: 'Asia',
    someText: 'Continente asiático',
  },
  {
    page: '/Continents/America',
    imageDir: './carousel/america.jpg',
    name: 'America',
    someText: 'América do Sul e do Norte',
  },
  {
    page: '/Continents/Africa',
    imageDir: './carousel/africa.jpg',
    name: 'Africa',
    someText: 'Continente africano',
  },
  {
    page: '/Continents/Oceania',
    imageDir: './carousel/oceania.jpg',
    name: 'Oceania',
    someText: 'Continente oceânico',
  },
];

export function Carousel() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className='mySwiper'
    >
      {continents.map((continent) => (
        <SwiperSlide key={continent.name}>
          <Link href={`${continent.page}`}>
            <Box
              backgroundImage={`${continent.imageDir}`}
              backgroundPosition='center'
              backgroundRepeat='no-repeat'
              backgroundSize='cover'
              w='1240px'
              h='450px'
              mx='auto'
              display='flex'
              flexDir='column'
              alignItems='center'
              justifyContent='center'
            >
              <Heading
                color='light.200'
                fontWeight={700}
                fontSize='48px'
                lineHeight='72px'
              >
                {continent.name}
              </Heading>
              <Text
                fontWeight={700}
                fontSize='24px'
                lineHeight='36px'
                color='light.200'
              >
                {continent.someText}
              </Text>
            </Box>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
