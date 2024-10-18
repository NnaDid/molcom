import React from 'react';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { Box, Heading, Text, Image, SimpleGrid, Button, VStack, Link, Select, Input, Flex } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel'; 

import "react-responsive-carousel/lib/styles/carousel.min.css"; // carousel styling
import "react-datepicker/dist/react-datepicker.css";


import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const CSRPage = () => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

  return (
    <>
       <NavBar />
      <Box maxW="1000px" mx="auto" mb={8}>
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          <Box position="relative">
            <Image src="../../src/assets/blueBackground.jpg" alt="Earth Day" width={'100%'} height={'200px'}/>
        <Flex
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
          color="white"
          bg="rgba(0, 0, 0, 0.5)"  // Optional: Overlay for better text visibility
        >
          <Box textAlign="center">
            <Heading as="h2" size="xl" mb={4}>Earth Day is Every Day</Heading>
            <Text fontSize="lg" mb={4}>
              Environmental and climate protection is a core value at our company.
            </Text>
            <Button colorScheme="pink">Read Interviews</Button>
          </Box>
        </Flex>
          </Box>
          <Box position="relative">
            <Image src="../../src/assets/fibre.jpg" alt="Sustainability" width={'100%'} height={'200px'} />
            <Flex
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                justifyContent="center"
                alignItems="center"
                color="white"
                bg="rgba(0, 0, 0, 0.5)"  // Optional: Overlay for better text visibility
                >
          <Box textAlign="center">
            <Heading as="h2" size="xl" mb={4}>Living Responsibility, Enabling Sustainability</Heading>
            <Text fontSize="lg" mb={4}>
              We are committed to ESG initiatives.
            </Text>
          </Box>
        </Flex>
          </Box>
        </Carousel>
      </Box>

      {/* CSR Responsibility Sections */}
      
      <Box maxW="1000px" mx="auto" p={8}>
      {/* Section Heading */}
      <Box textAlign="center" mb={8}>
        <Heading as="h2" size="2xl" mb={4}>
          Living responsibility, enabling sustainability
        </Heading>
        <Text fontSize="lg">
          Deutsche Telekom has been committed to sustainability and social responsibility for nearly three decades. 
          To improve transparency for our stakeholders, we assign our CR activities to the ESG perspectives: 
          E for Environment, S for Social, and G for Governance.
        </Text>
      </Box>

      {/* 3x2 Grid Layout */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        
        {/* Item 1 */}
        <Box borderRadius="md" boxShadow="md" overflow="hidden">
          <Image src="../../src/assets/fibre.jpg" alt="Our ESG Strategy" />
          <Box p={4}>
            <Heading as="h3" size="md">Our ESG strategy</Heading>
          </Box>
        </Box>

        {/* Item 2 */}
        <Box borderRadius="md" boxShadow="md" overflow="hidden">
          <Image src="../../src/assets/fibre.jpg" alt="Environment" />
          <Box p={4}>
            <Heading as="h3" size="md">Environment</Heading>
            <Text mt={2}>
              Deutsche Telekom has made a clear commitment to climate-neutral business practices.
            </Text>
          </Box>
        </Box>

        {/* Item 3 */}
        <Box borderRadius="md" boxShadow="md" overflow="hidden">
          <Image src="../../src/assets/fibre.jpg" alt="Social" />
          <Box p={4}>
            <Heading as="h3" size="md">Social</Heading>
          </Box>
        </Box>

        {/* Item 4 */}
        <Box borderRadius="md" boxShadow="md" overflow="hidden">
          <Image src="../../src/assets/fibre.jpg" alt="Governance" />
          <Box p={4}>
            <Heading as="h3" size="md">Governance</Heading>
          </Box>
        </Box>

        {/* Item 5 */}
        <Box borderRadius="md" boxShadow="md" overflow="hidden">
          <Image src="../../src/assets/fibre.jpg" alt="Corporate Responsibility Report" />
          <Box p={4}>
            <Heading as="h3" size="md">Corporate Responsibility Report</Heading>
          </Box>
        </Box>

        {/* Item 6 */}
        <Box borderRadius="md" boxShadow="md" overflow="hidden">
          <Image src="../../src/assets/fibre.jpg" alt="Sustainability for the Curious" />
          <Box p={4}>
            <Heading as="h3" size="md">Sustainability for the curious</Heading>
          </Box>
        </Box>

      </SimpleGrid>
    </Box>

      {/* News Section */}
      <Box  maxW="1000px" mx="auto" p={8}>
      {/* Section Heading */}
      <Heading as="h2" size="2xl" mb={8} textAlign="center">
        Corporate responsibility news
      </Heading>

      {/* Filter Options */}
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4} mb={8}>
        <Select placeholder="Choose topic">
          <option value="esg">ESG</option>
          <option value="environment">Environment</option>
          <option value="social">Social</option>
        </Select>
        <Select placeholder="Content type">
          <option value="news">News</option>
          <option value="blog">Blog</option>
        </Select>
       <Box>
          <Text mb={2}>Choose date or period (from)</Text>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MM/dd/yyyy"
            placeholderText="Select start date"
            isClearable
          />
        </Box>

        <Box>
          <Text mb={2}>Choose period (to)</Text>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="MM/dd/yyyy"
            placeholderText="Select end date"
            isClearable
          />
        </Box>
      </SimpleGrid>

      {/* News Item 1 */}
      <Flex mb={8} borderBottom={1} borderColor={'#ccc'}>
        <Box flex="1">
          <Text color="gray.500">Investor Relations | 10-10-2024</Text>
          <Heading as="h3" size="lg" mt={2}>
            Ad hoc notification
          </Heading>
          <Text mt={2}>
            Deutsche Telekom’s Board of Management plans higher dividend for 2024 and buy-backs of Deutsche Telekom shares in 2025.
          </Text>
          <Link color="blue.500" mt={2} href="#">
            → Ad hoc notification
          </Link>
        </Box>
        <Box flexShrink="0" ml={6}>
          <Image src="../../src/assets/fibre.jpg" alt="Ad hoc notification" boxSize="150px" objectFit="cover" />
        </Box>
      </Flex>

      {/* News Item 2 */}
      <Flex mb={8}>
        <Box flex="1">
          <Text color="gray.500">Corporate Responsibility | 10-08-2024</Text>
          <Heading as="h3" size="lg" mt={2}>
            "Design for All" — rethinking on a grand scale
          </Heading>
          <Text mt={2}>
            At Deutsche Telekom, we are committed to digital inclusion and equal opportunities. However, our products and services are often only suitable for certain people and target groups...
          </Text>
          <Link color="blue.500" mt={2} href="#">
            → News
          </Link>
        </Box>
        <Box flexShrink="0" ml={6}>
          <Image src="../../src/assets/fibre.jpg" alt="Design for All" boxSize="150px" objectFit="cover" />
        </Box>
      </Flex>

      {/* News Item 3 */}
      <Flex mb={8}>
        <Box flex="1">
          <Text color="gray.500">Blog.Telekom | 09-30-2024</Text>
          <Heading as="h3" size="lg" mt={2}>
            Our recipe for success: Curiosity and growth
          </Heading>
          <Text mt={2}>
            Constant development is the key to success. We encourage our employees to create innovative products for our customers and count on them being open and ready to learn.
          </Text>
          <Link color="blue.500" mt={2} href="#">
            → Our recipe for success: Curiosity and growth
          </Link>
        </Box>
        <Box flexShrink="0" ml={6}>
          <Image src="../../src/assets/fibre.jpg" alt="Curiosity and growth" boxSize="150px" objectFit="cover" />
        </Box>
      </Flex>
    </Box>

      <Footer />
    </>
  );
};

export default CSRPage;
