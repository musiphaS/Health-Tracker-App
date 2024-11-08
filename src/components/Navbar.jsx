import { Box, Button, Flex, HStack, Heading, Spacer, Text } from '@chakra-ui/react'
import React from 'react'


export default function Navbar() {
  return (
    <Flex as="nav" p="10px" alginItems="center" gap="10px">
        <Heading as="h1">Dojo Tasks</Heading>
        <Spacer/>

        <HStack spacing="20px">
        <Box bg="gray.200" p="10px">M</Box>
        <Text>kelvinm@gmail.com</Text>
        <Button bg="purple">Logout</Button>
        </HStack>
    </Flex>
  )
}
