import { Flex, Image, Link } from '@chakra-ui/react';

interface HeaderProps {
  mainPage?: boolean;
}

export function Header({ mainPage = false }: HeaderProps) {

  return (
    <Flex
      w='1160px'
      h='100px'
      mx='auto'
      justifyContent='center'
      alignItems='center'
      position='relative'
    >
      {!mainPage && (
        <Link href='/' position='absolute' left={0}>
          <Image src='../go_back.svg' alt='botão de voltar' />
        </Link>
      )}
      <Image
        src='../Logo.svg'
        alt='Logo escrita worldtrip com um avião passando por cima'
        maxW='11.5rem'
      />
    </Flex>
  );
}
