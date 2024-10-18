import React from 'react';
import { Box, Heading, Text, VStack, SimpleGrid, Image, Link, Flex } from '@chakra-ui/react';


import careersImage from '../assets/insight/career.png';
import FormsImage   from '../assets/insight/formspng.png';
import BlogsImage   from '../assets/insight/blog.png';
import EventImage   from '../assets/insight/event.png';
import WebinartImage   from '../assets/insight/webinar.png';



import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
// import formsImage from '../../assets/forms.jpg';
// import blogsImage from '../../assets/blogs.jpg';
// import webinarImage from '../../assets/webinar.jpg';
// import eventsImage from '../../assets/events.jpg';

const Insights = () => {
  return (
    <>
      <NavBar />
  
      <Box
        bgImage="url('../../src/assets/fibrebg.jpg')" 
        bgSize="cover"
        bgPos="center"
        height="400px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        mb={8}
      >
        <Heading as="h1" size="2xl" color="white">
          Insights
        </Heading>
      </Box>

      {/* Content Grid */}
      <Box maxW="1200px" mx="auto" px={4} py={8}>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          {/* Careers Section */}
          <Flex justifyContent='start' flexDirection='column'>
            <Image src={careersImage} alt="Careers" borderRadius="md" />
            <Text fontSize="lg" fontWeight="bold">Careers</Text>
            <Link href="/careers" color="blue.500">
              View More
            </Link>
          </Flex>

          {/* Forms Section */}
          <Flex justifyContent='start' flexDirection='column'>
            <Image src={FormsImage} alt="Forms" borderRadius="md" />
            <Text fontSize="lg" fontWeight="bold">Forms</Text>
            <Link href="/forms" color="blue.500">
              View More
            </Link>
          </Flex>

          {/* Blogs Section */}
          <Flex justifyContent='start' flexDirection='column'>
            <Image src={BlogsImage} alt="Blogs" borderRadius="md" />
            <Text fontSize="lg" fontWeight="bold">Blogs</Text>
            <Link href="/blogs" color="blue.500">
              View More
            </Link>
          </Flex>

          {/* Webinar Section */}
          <Flex justifyContent='start' flexDirection='column'>
            <Image src={WebinartImage} alt="Webinar" borderRadius="md" />
            <Text fontSize="lg" fontWeight="bold">Webinar</Text>
            <Link href="/webinar" color="blue.500">
              View More
            </Link>
          </Flex>

          {/* Events Section */}
          <Flex justifyContent='start' flexDirection='column'>
            <Image src={EventImage} alt="Events" borderRadius="md" />
            <Text fontSize="lg" fontWeight="bold">Events</Text>
            <Link href="/events" color="blue.500">
              View More
            </Link>
          </Flex>
        </SimpleGrid>
      </Box>

      <Footer />
    </>
  );
};

export default Insights;
