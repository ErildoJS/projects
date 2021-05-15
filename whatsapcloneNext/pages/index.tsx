
import {Heading, Grid, Flex, Input, Link, Button, Text, Divider} from '@chakra-ui/core'
function HomePage() {
  return (
    <Grid as="main"
     height="100vh"
     templateColumns="1fr 480px 480px 1fr"//coluna - de cima pra baixo
     templateRows="1fr 480px 1fr"
     templateAreas="
      '. . . .'
      '. logo form .'
      '. . . .'
     "//esses pontos significa nao vai ter nada
     justifyContent="center"
     alignItems="center"
     >
       <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
          <img src="/rocketseat.svg" alt="Rocketseat"/>

          <Heading size="2xl" lineHeight="shorter" marginTop={16}>
            Faça seu login na plataforma
          </Heading>
       </Flex>

       <Flex gridArea="form" height="100%" backgroundColor="gray.700" borderRadius="md" flexDir="column" alignItems="stretch" padding={16}> 
        <Input  height="50px" backgroundColor="gray.800" focusBorderColor="purple.500" borderRadius="sm" placeholder="E-mail"/>
        <Input  height="50px" backgroundColor="gray.800" focusBorderColor="purple.500" borderRadius="sm" placeholder="Senha" marginTop={2}/>
        <Link
          alignSelf="flex-start"
          marginTop={2}
          fontSize="sm"
          color="purple.600"
          fontWeight="bold"
          _hover={{color: 'purple.500'}}
        >
          Esqueci minha senha
        </Link>

        <Button
        backgroundColor="purple.500"
        height="50px"
        borderRadius="sm"
        variantColor="gray.700"
        _hover={{backgroundColor: 'purple.600'}}

          marginTop={6}

        >
          ENTRAR
        </Button>

        <Text textAlign="center" fontSize="sm" color="gray.300" marginTop={6}>
          Naõ tem uma conta? {" "}
          <Link
          color="purple.600"
          fontWeight="bold"
          _hover={{color: 'purple.500'}}
          >
            Registre-se
          </Link>
        </Text>

        <Divider />

        <Flex alignItems="center" >
          <Text fontSize="sm"></Text>
        </Flex>
       </Flex>
    </Grid>
  )
}

export default HomePage
  