import { Box, Flex, Heading, Input, SimpleGrid, Text, Button, Image, Container, VStack, Stack } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const CareersPage = () => {
  return (
    <> 
     <NavBar />
      {/* Hero Section */}
 
      <Box
          bgImage="url('../../src/assets/insight/webinar.png')" 
          bgSize="cover"
          bgPos="center"
          height="200px" 
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection={'column'}
          width={'100%'} 
          color={'white'}
          mb={8}
        >
            <Heading as="h1" size="2xl">
              Careers
            </Heading>
            <Text fontSize="lg">
              Join our team of innovators and help us shape the future.
            </Text>
        </Box>
      <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="start">        
        <Stack spacing={6} w="full">
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Frontend Developer</Heading>
            <Text mt={2}>
              We are looking for a talented Frontend Developer to join our team.
            </Text>
            <Button my={4} colorScheme="blue">
             Job Description
            </Button>
            <Button mx={4} my={4} colorScheme="blue">
              Apply Now
            </Button>
          </Box>

          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Backend Developer</Heading>
            <Text mt={2}>
              Seeking a skilled Backend Developer to work on exciting projects.
            </Text>
            <Button my={4} colorScheme="blue">
             Job Description
            </Button>
            <Button mx={4} my={4} colorScheme="blue">
              Apply Now
            </Button>
          </Box>

          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">UX/UI Designer</Heading>
            <Text mt={2}>
              Join us as a UX/UI Designer and help create amazing user experiences.
            </Text>
            <Button my={4} colorScheme="blue">
             Job Description
            </Button>
            <Button mx={4} my={4} colorScheme="blue">
              Apply Now
            </Button>
          </Box>
        </Stack>
      </VStack>
    </Container>

     <Footer />
    </>
  );
};

export default CareersPage;
