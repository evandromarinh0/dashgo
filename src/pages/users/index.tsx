import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return(
    <Box>
      <Header />

      <Flex w='100%' my='6' maxW={1480} mx='auto' px={['0','6']}>
        <Sidebar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex justify='space-between' align='center' mb='8'>
            <Heading size='lg' fontWeight='normal'>Usuários</Heading>

            <Link href='/users/create' passHref>
              <Button as='a' size='sm' fontSize='sm' colorScheme='pink' leftIcon={<Icon as={RiAddLine} fontSize='20' />}>
                Criar novo
              </Button>
            </Link>
          </Flex>
          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px={['4','4','6']} color='green.300' w='8'>
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th>Usuário</Th>
                { isWideVersion && <Th>Data de cadastro</Th> }
                <Th w='8' />
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4','4','6']}>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Evandro Marinho</Text>
                    <Text fontSize='sm' color='gray.300'>evanforgotlastone@hotmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>01 de Abril, 2021</Td> }
                <Td>
                  { isWideVersion ? (
                    <Button as='a' size='sm' fontSize='sm' colorScheme='blue' leftIcon={<Icon as={RiPencilLine} fontSize='16' />}>
                      Editar
                    </Button>
                  ) : (
                    <Button as='a' size='sm' fontSize='sm' colorScheme='blue' leftIcon={<Icon ml='2' as={RiPencilLine} fontSize='20' />} />
                  )}
                </Td>
              </Tr>
              <Tr>
                <Td px={['4','4','6']}>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Evandro Marinho</Text>
                    <Text fontSize='sm' color='gray.300'>evanforgotlastone@hotmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>01 de Abril, 2021</Td> }
                <Td>
                  { isWideVersion ? (
                    <Button as='a' size='sm' fontSize='sm' colorScheme='blue' leftIcon={<Icon as={RiPencilLine} fontSize='16' />}>
                      Editar
                    </Button>
                  ) : (
                    <Button as='a' size='sm' fontSize='sm' colorScheme='blue' leftIcon={<Icon ml='2' as={RiPencilLine} fontSize='20' />} />
                  )}
                </Td>
              </Tr>
              <Tr>
                <Td px={['4','4','6']}>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Evandro Marinho</Text>
                    <Text fontSize='sm' color='gray.300'>evanforgotlastone@hotmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>01 de Abril, 2021</Td> }
                <Td>
                  { isWideVersion ? (
                    <Button as='a' size='sm' fontSize='sm' colorScheme='blue' leftIcon={<Icon as={RiPencilLine} fontSize='16' />}>
                      Editar
                    </Button>
                  ) : (
                    <Button as='a' size='sm' fontSize='sm' colorScheme='blue' leftIcon={<Icon ml='2' as={RiPencilLine} fontSize='20' />} />
                  )}
                </Td>
              </Tr>
            </Tbody>
          </Table>
          
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}