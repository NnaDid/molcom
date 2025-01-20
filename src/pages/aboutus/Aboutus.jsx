import React from 'react';
import { Box, Flex, Heading, Text, VStack, Image, Divider, SimpleGrid } from '@chakra-ui/react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import bgfoto from '../../assets/blueBackground.jpg'


const AboutUs = () => {
  return (
<>
    <NavBar />

    <Box p={8}>
        {/* Company Overview Section */}
        <Flex direction="column" align="center" mb={16} py={4}  backgroundImage={`url(${bgfoto})`} >
            <Heading as="h1" size="2xl" mb={4} textAlign="center" color='blue.50'>
                    About Us
            </Heading>
            <Text fontSize="lg" textAlign="justify" maxW="800px" mb={4} color='blue.100'>
            <Text color='blue.100'>  “… Quality is our guiding principle to Service…” </Text>
                Molcom Multi-concepts Limited provides a wide range of solution-oriented services to a cross-section of clients within the country and internationally. 
                The company was borne out of a genuine aspiration to raise the bar within the telecommunications service industry in Africa and is led by a team of young, self-motivated, individuals with extensive relevant experience and an ever-growing desire to invest in skill acquisition and technology research.
                With our current rate of rapid growth, our continuous quest for excellence is evident in all our service areas. We have an exceptional track record with our current clients, and we intend to replicate and surpass this with our prospective clients. 
                Our commitment to safety and world-class standards in our operations distinguishes our quality deliverables to all our clients.

            </Text>
            {/* <Image src={bgfoto} alt="About Us Image" borderRadius="lg" boxShadow="lg" /> */}
        </Flex>

        {/* Timeline Section */}
        <Heading as="h2" size="xl" textAlign="center" mb={8}>
            Our Journey
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <VStack>
            <Heading size="lg">2005</Heading>
            <Text fontSize="md" color="gray.600">Founded with a vision to revolutionize telecommunications in Africa.</Text>
            </VStack>
            <VStack>
            <Heading size="lg">2010</Heading>
            <Text fontSize="md" color="gray.600">Expanded into ICT, becoming a key player in technology-driven solutions.</Text>
            </VStack>
            <VStack>
            <Heading size="lg">2020</Heading>
            <Text fontSize="md" color="gray.600">Launched major construction and energy projects to diversify our offerings.</Text>
            </VStack>
        </SimpleGrid>
        <Divider mt={16} />
     </Box>

    <Footer />
</>

  );
};

export default AboutUs;
