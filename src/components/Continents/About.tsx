import { Box, Flex, HStack, Image, Text, Tooltip } from '@chakra-ui/react';

interface AboutProps {
  aboutText: string;
  amountCountries: number;
  amountLanguages: number;
  amountCities: number;
}

export function About({
  aboutText,
  amountCountries,
  amountLanguages,
  amountCities,
}: AboutProps) {
  return (
    <Flex w='1160px' mt='80px' mx='auto' justifyContent='space-between'>
      <Text
        fontWeight='400'
        fontSize='24px'
        lineHeight='36px'
        w='600px'
        textAlign='justify'
      >
        {aboutText}
      </Text>

      <HStack spacing='42px'>
        <Box>
          <Text
            color='yellow.800'
            fontWeight='600'
            fontSize='48px'
            lineHeight='72px'
            textAlign='center'
          >
            {amountCountries}
          </Text>
          <Text
            color='dark.600'
            fontWeight='600'
            fontSize='24px'
            lineHeight='36px'
            textAlign='center'
          >
            países
          </Text>
        </Box>

        <Box>
          <Text
            color='yellow.800'
            fontWeight='600'
            fontSize='48px'
            lineHeight='72px'
            textAlign='center'
          >
            {amountLanguages}
          </Text>
          <Text
            color='dark.600'
            fontWeight='600'
            fontSize='24px'
            lineHeight='36px'
            textAlign='center'
          >
            linguas
          </Text>
        </Box>

        <Box>
          <Text
            color='yellow.800'
            fontWeight='600'
            fontSize='48px'
            lineHeight='72px'
            textAlign='center'
          >
            {amountCities}
          </Text>
          <Text
            color='dark.600'
            fontWeight='600'
            fontSize='24px'
            lineHeight='36px'
            textAlign='center'
          >
            cidades + 100
            <Tooltip label='Tem cidade pra caramba!' bg='dark.500' hasArrow>
              <Image
                display='inline'
                w='18px'
                h='18px'
                src='../Info.svg'
                alt='icon'
              />
            </Tooltip>
          </Text>
        </Box>
      </HStack>
    </Flex>
  );
}
