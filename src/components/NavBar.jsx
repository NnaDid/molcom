import React from 'react';
import { Box, Button, Flex, Text, Menu, MenuButton, MenuList, MenuItem, SimpleGrid, Heading, useDisclosure, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import Logo from '../assets/Logo.png';

const MotionLink = motion.create(Link);  // Create a motion component for animated links

const NavBar = () => {
  const { isOpen: isAboutOpen, onOpen: onAboutOpen, onClose: onAboutClose } = useDisclosure();
  const { isOpen: isServicesOpen, onOpen: onServicesOpen, onClose: onServicesClose } = useDisclosure();

  return (
    <Box bg="gray.400" color="white" minH="10vh"  zIndex="10" boxShadow='sm'>
      {/* Navbar */}
      <Flex as="nav" align="center" justify="space-between" py="0.5rem" bg="white" color="black" zIndex="10">
        {/* Logo */}
        <Box>
          <Text fontSize="xl" fontWeight="bold" as={Link} to='/'>
            <img src={Logo} alt="Molcom" width="180" />
          </Text>
        </Box>

        {/* Links */}
        <Flex display={{ base: 'none', md: 'flex' }} gap="4" align="center">
          {/* About Us with dropdown */}
          <Menu isOpen={isAboutOpen}>
            <MenuButton
              as={Button}
              variant="link"
              rightIcon={<ChevronDownIcon />}
              onMouseEnter={onAboutOpen}
              onMouseLeave={onAboutClose}
              color="#212e44" fontSize={20} fontWeight={'bold'}
            >
              About Us
            </MenuButton>
            <MenuList onMouseEnter={onAboutOpen} onMouseLeave={onAboutClose} zIndex="10">
            <VStack align="start" spacing={2} mx={5}>
              <MotionLink
                as={MenuItem}
                to="/about-us"
                whileHover={{ scale: 1.1, color: '#286EA7' }}  // Scale and color change on hover
              >
                About Us
              </MotionLink>
              <MotionLink
                as={MenuItem}
                to="/mission"
                whileHover={{ scale: 1.1, color: '#286EA7' }}  // Scale and color change on hover
              >
                Mission & Values
              </MotionLink>
              <MotionLink
                as={MenuItem}
                to="/team"
                whileHover={{ scale: 1.1, color: '#286EA7' }}  // Scale and color change on hover
              >
                Team
              </MotionLink>
            </VStack>
            </MenuList>
          </Menu>

          {/* Services Mega Menu */}
          <Menu isOpen={isServicesOpen}>
            <MenuButton
              as={Button}
              variant="link"
              rightIcon={<ChevronDownIcon />}
              onMouseEnter={onServicesOpen}
              onMouseLeave={onServicesClose}
              color="#212e44" fontSize={20} fontWeight={'bold'}
            >
              Services
            </MenuButton>
            <MenuList width="100vw" onMouseEnter={onServicesOpen} onMouseLeave={onServicesClose} zIndex="10">
              <SimpleGrid columns={3} spacing={8} padding="2rem" zIndex="10">
                {/* Telecom Service */}
                <Box>
                  <Heading as="h4" size="md" mb={4} textTransform='uppercase'>Telecom Service</Heading>
                  <VStack align="start" spacing={2}>
                    <MotionLink
                      href="#"
                      display="block"
                      mb={2}
                      whileHover={{ scale: 1.1, color: '#286EA7' }}  // Animation on hover
                    >
                      Telecom Infrastructure
                    </MotionLink>
                    <MotionLink
                      href="#"
                      display="block"
                      mb={2}
                      whileHover={{ scale: 1.1, color: '#286EA7' }}
                    >
                      Network Optimization
                    </MotionLink>
                  </VStack>
                </Box>

                {/* INFORMATION AND COMMUNICATIONS TECHNOLOGY */}
                <Box>
                  <Heading as="h4" size="md" mb={4}>INFORMATION AND COMMUNICATIONS TECHNOLOGY</Heading>
                  <VStack align="start" spacing={2}>
                    <MotionLink
                      href="#"
                      display="block"
                      mb={2}
                      whileHover={{ scale: 1.1, color: '#286EA7' }}
                    >
                      Software Development
                    </MotionLink>
                    <MotionLink
                      href="#"
                      display="block"
                      mb={2}
                      whileHover={{ scale: 1.1, color: '#286EA7' }}
                    >
                      Cyber Security
                    </MotionLink>
                    <MotionLink
                      href="#"
                      display="block"
                      mb={2}
                      whileHover={{ scale: 1.1, color: '#286EA7' }}
                    >
                      Cloud Solutions
                    </MotionLink>
                  </VStack>
                </Box>

                {/* PROJECT MANAGEMENT */}
                <Box>
                  <Heading as="h4" size="md" mb={4}>PROJECT MANAGEMENT</Heading>
                  <VStack align="start" spacing={2}>
                    <MotionLink
                      href="#"
                      display="block"
                      mb={2}
                      whileHover={{ scale: 1.1, color: '#286EA7' }}
                    >
                      Risk Management
                    </MotionLink>
                    <MotionLink
                      href="#"
                      display="block"
                      mb={2}
                      whileHover={{ scale: 1.1, color: '#286EA7' }}
                    >
                      Project Execution
                    </MotionLink>
                  </VStack>
                </Box>

                {/* CONSTRUCTION */}
                <Box>
                  <Heading as="h4" size="md" mb={4}>CONSTRUCTION</Heading>
                  <VStack align="start" spacing={2}>
                    <MotionLink
                      href="#"
                      display="block"
                      mb={2}
                      whileHover={{ scale: 1.1, color: '#286EA7' }}
                    >
                      Structural Design
                    </MotionLink>
                    <MotionLink
                      href="#"
                      display="block"
                      mb={2}
                      whileHover={{ scale: 1.1, color: '#286EA7' }}
                    >
                      Civil Engineering
                    </MotionLink>
                  </VStack>
                </Box>

                {/* TRAINING AND BUSINESS ADVISORY */}
                <Box>
                  <Heading as="h4" size="md" mb={4}>TRAINING AND BUSINESS ADVISORY</Heading>
                    <VStack align="start" spacing={2}>
                      <MotionLink
                        href="#"
                        display="block"
                        mb={2}
                        whileHover={{ scale: 1.1, color: '#286EA7' }}
                      >
                        Corporate Training
                      </MotionLink>
                      <MotionLink
                        href="#"
                        display="block"
                        mb={2}
                        whileHover={{ scale: 1.1, color: '#286EA7' }}
                      >
                        Business Consulting
                      </MotionLink>
                    </VStack>
                </Box>

                {/* POWER AND ENERGY */}
                <Box>
                  <Heading as="h4" size="md" mb={4}>POWER AND ENERGY</Heading>
                    <VStack align="start" spacing={2}>
                        <MotionLink
                          href="#"
                          display="block"
                          mb={2}
                          whileHover={{ scale: 1.1, color: '#286EA7' }}
                        >
                          Renewable Energy
                        </MotionLink>
                        <MotionLink
                          href="#"
                          display="block"
                          mb={2}
                          whileHover={{ scale: 1.1, color: '#286EA7' }}
                        >
                          Power Distribution
                        </MotionLink>
                    </VStack>
                </Box>
              </SimpleGrid>
            </MenuList>
          </Menu>

          {/* Other Links */}
          <Button as={Link} variant="link" color="#212e44" fontSize={20} fontWeight={'bold'} to="/insight">Insight</Button>
          <Button as={Link} variant="link" color="#212e44" fontSize={20} fontWeight={'bold'} to="/careers">Careers</Button>
          <Button as={Link} variant="link" color="#212e44" fontSize={20} fontWeight={'bold'} to="/csr">Corporate Responsibility</Button>
        </Flex>

        {/* Become a Client Button */}
        <Button
          colorScheme="blue"
          size={{ base: 'lg', md: 'xl' }}
          className="become-client"
          bgGradient="linear(to-r, #286EA7, #01112E)"
          _hover={{
            bgGradient: "linear(to-r, #01112E, #286EA7)",
          }}
          paddingX={10}
          paddingY={4}
          fontSize={18}
          textTransform="uppercase"
          as={Link} 
          to="/become-a-client"
        >
          Become a Client
        </Button>
      </Flex>
    </Box>
  );
};

export default NavBar;
