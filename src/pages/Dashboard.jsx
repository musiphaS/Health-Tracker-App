import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {

  return (
    <Container as="section" maxWidth="md">
      <Heading my="30px" p="10px">Chakra UI Components</Heading>
      <Text ml="50px" color="blue">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, expedita.
      </Text>
      <Text marginLeft="50px" fontWeight="bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, expedita.
      </Text>

      <Box my="30px" p="20px" bg="orange">
        <Text color="white">This is a box</Text>
      </Box>

      <Box  p="10px"
    bg= "purple"
    m="10px"
    textAlign="center"
    filter= "blur(2px)"
    color="white">
        Hello, Ninjas!
      </Box>
    </Container>
  );
}
