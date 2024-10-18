import React from 'react';
import { Box, Heading, Text, VStack, HStack, Icon } from '@chakra-ui/react';
import { FaLightbulb, FaTools, FaChartLine, FaCogs } from 'react-icons/fa';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const MissionAndValues = () => {
  return (
    <>
      <NavBar />
      <Box p={8} textAlign="center">
        {/* Mission Section */}
        <Heading as="h1" size="2xl" mb={4}>
          Our Mission
        </Heading>
        <Text fontSize="lg" maxW="600px" mx="auto" mb={12}>
          To always achieve first-class service delivery through competence-centered initiatives using cutting-edge tools, and a continued focus on strengthening partnerships.
        </Text>

        {/* Vision Section */}
        <Heading as="h2" size="xl" mb={8}>
          Our Vision
        </Heading>
        <Text fontSize="lg" maxW="600px" mx="auto" mb={12}>
          To be Africa’s leading telecommunications solutions provider focusing on infrastructural and human capacity building within the sector.
        </Text>

        {/* Core Values Section */}
        <Heading as="h2" size="xl" mb={8}>
          Our Core Values
        </Heading>
        <HStack justify="space-around" spacing={8} wrap="wrap">
          {/* Creativity */}
          <VStack>
            <Icon as={FaLightbulb} w={16} h={16} color="yellow.400" />
            <Text fontSize="lg" fontWeight="bold">
              Creativity
            </Text>
            <Text fontSize="sm" maxW="200px">
              We pride ourselves on our ability to continuously create solutions that add value to our clients and society at large.
            </Text>
          </VStack>

          {/* Effectiveness */}
          <VStack>
            <Icon as={FaChartLine} w={16} h={16} color="blue.400" />
            <Text fontSize="lg" fontWeight="bold">
              Effectiveness
            </Text>
            <Text fontSize="sm" maxW="200px">
              Our business is centered on being able to provide the best service at the least possible cost to the client.
            </Text>
          </VStack>

          {/* Quality */}
          <VStack>
            <Icon as={FaTools} w={16} h={16} color="green.400" />
            <Text fontSize="lg" fontWeight="bold">
              Quality
            </Text>
            <Text fontSize="sm" maxW="200px">
              Being efficient is just as important to us as providing the best quality results. A solution is only worth its salt if it has lasting impact.
            </Text>
          </VStack>

          {/* Innovation */}
          <VStack>
            <Icon as={FaCogs} w={16} h={16} color="red.400" />
            <Text fontSize="lg" fontWeight="bold">
              Innovation
            </Text>
            <Text fontSize="sm" maxW="200px">
              Being the best is determined largely by daring to tread new paths in a bid to make good solutions better.
            </Text>
          </VStack>
        </HStack>
      </Box>
      <Footer />
    </>
  );
};

export default MissionAndValues;
