import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return(
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Evandro Marinho</Text>
        <Text color='gray.300' fontSize='small'>evanforgotlastone@hotmail.com</Text>
      </Box>
      <Avatar size='md' name='Evandro Marinho' src='https://github.com/evandromarinh0.png' />
    </Flex>
  );
}