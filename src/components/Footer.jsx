import React from 'react';
import { Box, Flex, Text, Link, Input, Checkbox, Button, VStack, Divider } from '@chakra-ui/react';

const Footer = () => {
  return (

    <>
    
    <Box bg="#286EA790" p={10} w="100%">
      <Flex justify="space-between" wrap="wrap" maxW="1200px" mx="auto" color={'#01112E'} mt={20}>
        
        {/* Our Locations Section */}
        <VStack align="start" spacing={2} mb={5} maxW={'300px'}>
          <Text fontWeight="bold" fontSize="lg">
            OUR LOCATIONS
          </Text>
          <Text>No 21 IBM Haruna Street, Utako, Abuja/FCT</Text>
          <Text>11 Adeyinka Street, off Sura Mogaji, Ilupeju, Lagos</Text>
          <Text>+2348137184429</Text>
          <Link href="mailto:info@molcomconcepts.com">info@molcomconcepts.com</Link>
          <Link href="mailto:enquiries@molcomconcepts.com">enquiries@molcomconcepts.com</Link>
        </VStack>

        {/* Our Services Section */}
        <VStack align="start" spacing={2} mb={5} maxW={'300px'}>
          <Text fontWeight="bold" fontSize="lg">
            OUR SERVICES
          </Text>
          <Text>Telecommunication Services</Text>
          <Text>Information And Communication Technology</Text>
          <Text>Project Management</Text>
          <Text>Construction</Text>
          <Text>Training And Business Advisory</Text>
          <Text>Power And Energy</Text>
        </VStack>

        {/* Links Section */}
        <VStack align="start" spacing={2} mb={5} maxW={'300px'}>
          <Text fontWeight="bold" fontSize="lg">
            LINKS
          </Text>
          <Link href="#">Career</Link>
          <Link href="#">Connect with us</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Quality policy</Link>
          <Link href="#">Privacy policy</Link>
        </VStack>
        {/* Links Section */}
        <VStack align="start" spacing={2} mb={5} maxW={'300px'}>
          <Text fontWeight="bold" fontSize="lg">
            NEWSLETTER
          </Text>
          <Text fontSize="sm" wrap> 
             Subscribe to Business and HR Insights, our bi-monthly publication focused on the critical issues shaping talent management across Africa.
          </Text>
          <Input placeholder="Enter your email address"  />
          <Checkbox>
            I authorize MOLCOM Multi-Concept Limited to send me updates and process my information in connection with this request. I understand that I may withdraw my consent at any time.
          </Checkbox>
          <Button colorScheme="blue" w="150px">
            Subscribe Now
          </Button>
        </VStack> 
      </Flex>



    </Box>

      {/* Copyright Section */}
      <Flex justify="space-between" align="center" bg="blue.900" color="white" p={4}>
      <Text>
          ©2024 MOLCOM MULTI-CONCEPT LIMITED
      </Text>
      <Flex>
          <Link href="#" mx={2}>
          Terms of use
          </Link>
          <Text mx={2}>|</Text>
          <Link href="#" mx={2}>
          Privacy and cookies
          </Link>
          <Text mx={2}>|</Text>
          <Link href="#" mx={2}>
          Sitemap
          </Link>
          <Text mx={2}>|</Text>
          <Link href="#" mx={2}>
          Legal
          </Link>
          <Text mx={2}>|</Text>
          <Link href="#" mx={2}>
          Cookie Settings
          </Link>
      </Flex>
      </Flex>
    </>
  );
};

export default Footer;
