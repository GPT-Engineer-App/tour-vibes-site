import { Container, VStack, Heading, Text, Button, Image, Link } from "@chakra-ui/react";
import { FaTicketAlt, FaInfoCircle, FaMusic } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={8} centerContent>
      <VStack spacing={8} align="center">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1488779382325-da88fd3175e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5kJTIwcGVyZm9ybWluZyUyMGxpdmV8ZW58MHx8fHwxNzE1MzI1MzkxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Band Live Performance" />
        <Heading as="h1" size="2xl" textAlign="center">
          The Rock Legends Tour 2023
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Join us on our biggest tour yet! Experience the thrill of live music across 20 cities.
        </Text>
        <VStack spacing={4}>
          <Button leftIcon={<FaTicketAlt />} colorScheme="teal" size="lg">
            Buy Tickets
          </Button>
          <Button leftIcon={<FaInfoCircle />} colorScheme="gray" size="lg">
            Learn More
          </Button>
          <Button leftIcon={<FaMusic />} colorScheme="purple" size="lg">
            Listen Now
          </Button>
        </VStack>
        <Text fontSize="md" color="gray.500">
          Follow us on
          <Link href="#" color="teal.500">
            {" "}
            Instagram
          </Link>
          ,
          <Link href="#" color="teal.500">
            {" "}
            Facebook
          </Link>
          , and
          <Link href="#" color="teal.500">
            {" "}
            Twitter
          </Link>{" "}
          for live updates!
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;
