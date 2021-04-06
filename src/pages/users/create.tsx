import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

interface SignInFormData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().required('Campo obrigatório').email('Digite um e-mail válido'),
  password: yup.string().required('Campo obrigatório').min(8, 'Mínimo de 8 caracteres'),
  password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'Senhas devem combinar'),
});

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({resolver: yupResolver(schema)});

  const handleCreateUser: SubmitHandler<SignInFormData> = (values, event) => {
    console.log(values)
  }
  
  return(
    <Box>
      <Header />

      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <Sidebar />

        <Box as='form' flex='1' borderRadius={8} bg='gray.800' p={['6','8']} onSubmit={handleSubmit(handleCreateUser)}>
          <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>
          
          <Divider my='6' borderColor='gray.700' />
          
          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing={['4','6']} w='100%'>
              <Input name='name' label='Nome completo' {...register('name')} error={formState.errors.name} />
              <Input name='email' label='E-mail' type='email' {...register('email')} error={formState.errors.email} />
            </SimpleGrid>

            <SimpleGrid minChildWidth='240px' spacing={['4','6']} w='100%'>
              <Input name='password' label='Senha' type='password' {...register('password')} error={formState.errors.password} />
              <Input name='password_confirmation' label='Confirmação de senha' type='password' {...register('password_confirmation')} error={formState.errors.password_confirmation} />
            </SimpleGrid>
          </VStack>

          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Link href='/users' passHref>
                <Button as='a' colorScheme='whiteAlpha'>Cancelar</Button>
              </Link>
              <Button isLoading={formState.isSubmitting} type='submit' colorScheme='pink'>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}