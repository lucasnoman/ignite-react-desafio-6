import { Box, Center, Flex, Image, Text } from '@chakra-ui/react';

export function TravelTypes() {
  return (
    <Box w='72.5rem' mx='auto' mt='114px' mb='60px'>
      <Flex gap={6} justifyContent='space-between'>
        <Center flexDirection='column'>
          <Image
            src='./travel_types/cocktail.svg'
            alt='copo de drink'
            w={85}
            h={85}
            mb='24px'
          />
          <Text fontWeight='600' fontSize='24px' lineHeight='36px'>
            vida noturna
          </Text>
        </Center>
        <Center flexDirection='column'>
          <Image
            src='./travel_types/surf.svg'
            alt='copo de drink'
            w={85}
            h={85}
            mb='24px'
          />
          <Text fontWeight='600' fontSize='24px' lineHeight='36px'>
            praia
          </Text>
        </Center>
        <Center flexDirection='column'>
          <Image
            src='./travel_types/building.svg'
            alt='copo de drink'
            w={85}
            h={85}
            mb='24px'
          />
          <Text fontWeight='600' fontSize='24px' lineHeight='36px'>
            moderno
          </Text>
        </Center>
        <Center flexDirection='column'>
          <Image
            src='./travel_types/museum.svg'
            alt='copo de drink'
            w={85}
            h={85}
            mb='24px'
          />
          <Text fontWeight='600' fontSize='24px' lineHeight='36px'>
            clássico
          </Text>
        </Center>
        <Center flexDirection='column'>
          <Image
            src='./travel_types/earth.svg'
            alt='copo de drink'
            w={85}
            h={85}
            mb='24px'
          />
          <Text fontWeight='600' fontSize='24px' lineHeight='36px'>
            e mais...
          </Text>
        </Center>
      </Flex>
    </Box>
  );
}
