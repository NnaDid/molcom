import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  VStack,
} from '@chakra-ui/react';

const TelecomServices = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="start">
        <Heading as="h1" size="2xl">
          Telecom Services
        </Heading>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Telecom Infrastructure Services
          </Heading>
          <UnorderedList spacing={2}>
            <ListItem>Installation, Commissioning, and Integration of Telecom Equipment</ListItem>
            <ListItem>Facility Optimization</ListItem>
            <ListItem>RAN Optimization</ListItem>
            <ListItem>Drive Testing</ListItem>
            <ListItem>Network Dimensioning</ListItem>
            <ListItem>Expansion Planning</ListItem>
            <ListItem>New Technology Migration (SWAP Activities)</ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Managed Services
          </Heading>
          <UnorderedList spacing={2}>
            <ListItem>Electrical and Energy Audits</ListItem>
            <ListItem>Installation and Commissioning of Active Network Elements</ListItem>
            <ListItem>Tower Retrofits and Corrections</ListItem>
            <ListItem>Tower Audits, Mapping, and Assessments</ListItem>
            <ListItem>Tower Structural Analysis</ListItem>
            <ListItem>Quality Audits</ListItem>
            <ListItem>Tower Maintenance</ListItem>
            <ListItem>Network Performance Analysis and Optimization</ListItem>
            <ListItem>Commissioning of DC Power Systems</ListItem>
            <ListItem>4G Implementation in Telecom Specialization</ListItem>
            <ListItem>Supply of Consumable Materials for Telecom Sites</ListItem>
            <ListItem>Site Surveys and Auditing</ListItem>
          </UnorderedList>
        </Box>
      </VStack>
    </Container>
  );
};

export default TelecomServices;
