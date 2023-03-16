import {
  Card as ChakraCard,
  CardBody,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

interface CardProps {
  image: string;
  city: string;
  country: string;
  flag: string;
}

export function Card({ city, country, flag, image }: CardProps) {
  return (
    <ChakraCard w='256px' h='279px'>
      <CardBody
        p='0'
        border='1px solid'
        borderColor='yellow.800/50'
        borderRadius='md'
      >
        <Image src={image} alt='Green double couch with wooden legs' />
        <HStack justify='space-between' px='24px' alignItems='center'>
          <Stack pt='18px' pb='25px' spacing='3'>
            <Heading size='md' color='dark.600'>
              {city}
            </Heading>
            <Text color='dark.500'>{country}</Text>
          </Stack>
          <Image
            src={flag}
            alt='bandeira do reino unido'
            h='30px'
            w='30px'
            rounded='50%'
          />
        </HStack>
      </CardBody>
    </ChakraCard>
  );
}
