import { Button, Flex, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

interface SignInFormData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required('Campo obrigatório').email('Digite um e-mail válido'),
  password: yup.string().required('Campo obrigatório'),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({resolver: yupResolver(schema)});

  const handleSignIn: SubmitHandler<SignInFormData> = (values, event) => {
    console.log(values)
  }

  return (
    <Flex w='100vw' h='100vh' align='center' justify='center' >
      <Flex onSubmit={handleSubmit(handleSignIn)} as='form' w='100%' maxW={360} bg='gray.800' p='8' borderRadius={8} flexDir='column' >
        <Stack spacing='4'>
          <Input name='email' type='email' label='E-mail' {...register('email')} error={formState.errors.email} />
          <Input name='password' type='password' label='Senha' {...register('password')} error={formState.errors.password} />
        </Stack>
        <Button isLoading={formState.isSubmitting} type='submit' mt='6' colorScheme='pink' size='lg'>Entrar</Button>
      </Flex>
    </Flex>
  );
}
