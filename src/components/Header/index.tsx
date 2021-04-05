import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from './Logo';
import { Search } from './Search';
import { Profile } from './Profile';
import { NotificationNav } from './NotificationNav';

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

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

      { isWideVersion && <Search /> }
      
      <Flex align='center' ml='auto'>
        <NotificationNav />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}