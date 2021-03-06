import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from './Logo';
import { Search } from './Search';
import { Profile } from './Profile';
import { NotificationNav } from './NotificationNav';
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export function Header() {
  const { onOpen } = useSidebarDrawer();

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
      { !isWideVersion && (
        <IconButton 
        onClick={onOpen} 
        icon={<Icon as={RiMenuLine} />} 
        fontSize='24' 
        variant='unstyled' 
        aria-label='Open navigation' 
        mr='2' />
      )}

      <Logo />

      { isWideVersion && <Search /> }
      
      <Flex align='center' ml='auto'>
        <NotificationNav />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}