import React from 'react';
import { Box, Flex, Heading, Text, VStack, Button } from '@chakra-ui/react';
import { FaClipboardCheck, FaCheckSquare } from 'react-icons/fa';
import { IoChatboxEllipsesSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const SimpleStepsSection = () => { 

  return (
    <Box bg="black" color="white" py={16}>
      <Flex direction="column" align="center" maxW="1200px" mx="auto" px={4}>
        {/* Section Title */}
        <Heading as="h2" fontSize="2xl" mb={8} textAlign="center">
          Working with Us is Simple
        </Heading>

        {/* Steps Section */}
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" w="100%">
          {/* Step 1 */}
          <VStack textAlign="center" mb={8} w={{ base: '100%', md: '30%' }}>
            <Box as={IoChatboxEllipsesSharp} color="green.400" boxSize={'4em'} mb={4} />
            <Text fontWeight="bold" fontSize="lg">
              Step 1
            </Text>
            <Text fontSize="md" fontWeight="bold" mb={2}>
              Schedule Your Consultation
            </Text>
            <Text fontSize="sm">
              We will have a free consultation with you to understand what you are trying to achieve.
            </Text>
          </VStack>

          {/* Step 2 */}
          <VStack textAlign="center" mb={8} w={{ base: '100%', md: '30%' }}>
            <Box as={FaClipboardCheck} color="blue.400" boxSize={'4em'} mb={4} />
            <Text fontWeight="bold" fontSize="lg">
              Step 2
            </Text>
            <Text fontSize="md" fontWeight="bold" mb={2}>
              Develop a Custom Plan
            </Text>
            <Text fontSize="sm">
              We will co-create a fit-for-purpose solution that meets your business needs.
            </Text>
          </VStack>

          {/* Step 3 */}
          <VStack textAlign="center" mb={8} w={{ base: '100%', md: '30%' }}>
            <Box as={FaCheckSquare} color="green.400" boxSize={'4em'} mb={4} />
            <Text fontWeight="bold" fontSize="lg">
              Step 3
            </Text>
            <Text fontSize="md" fontWeight="bold" mb={2}>
              Achieve Your Goals
            </Text>
            <Text fontSize="sm">
              We will implement the plan and measure our success against your business objectives.
            </Text>
          </VStack>
        </Flex>

        {/* Button */}
        <Button
          mt={8}
          size="lg" 
          colorScheme="orange"
          px={10}  
          as={Link}
          to="/become-a-client"
        >
          Become a Client
        </Button>
      </Flex>
    </Box>
  );
};

export default SimpleStepsSection;
