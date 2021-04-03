import { Flex } from "@chakra-ui/react";
import { Logo } from './Logo';
import { Search } from './Search';
import { Profile } from './Profile';
import { NotificationNav } from './NotificationNav';

export function Header() {
  return(
    <Flex
      as='header'
      w='100%'
      maxW={1480}
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='center'
    >
      <Logo />

      <Search />
      
      <Flex align='center' ml='auto'>
        <NotificationNav />

        <Profile />
      </Flex>
    </Flex>
  );
}