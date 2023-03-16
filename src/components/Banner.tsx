import { Box, Container, Flex, Image, Text } from '@chakra-ui/react';

export function Banner() {
  return (
    <Container maxW='90rem' h='21rem' centerContent>
      <Image
        src='./Banner.png'
        alt='Fundo com ceu estrelado, ícone de avião e texto sobre os continentes'
        position='absolute'
        w='100%'
        h='21rem'
      />
      <Flex
        w='72.5rem'
        h='21rem'
        position='relative'
        align='center'
        justify='space-between'
      >
        <Box>
          <Text fontWeight='500' fontSize='2.25rem' color='light.200'>
            5 Continentes,
          </Text>
          <Text fontWeight='500' fontSize='2.25rem' color='light.200'>
            infinitas possibilidades
          </Text>
          <Text maxW='30rem' color='light.300'>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou
          </Text>
        </Box>

        <Image
          src='./Airplane.svg'
          alt='ícone de um avião'
          h='16.875rem'
          mt='8rem'
        />
      </Flex>
    </Container>
  );
}
