// src/App.jsx
import React, { useEffect, useState } from 'react'; 
import {Box, Flex, Text, Button, IconButton, Image, Stack, useBreakpointValue } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

import ServicesSection from './components/Services';

import bg1 from './assets/bg/bg1.jpg';
import bg2 from './assets/bg/bg2.jpg'
import bg3 from './assets/bg/bg3.jpg'
import bg4 from './assets/bg/bg4.jpg'
import bg5 from './assets/bg/bg5.jpg'
import ClientsSection from './components/Clients';
import Footer from './components/Footer';
import SimpleStepsSection from './components/SimpleSteps';
import NavBar from './components/NavBar';

function Home() { 

    // State for managing the current slide
    const [currentSlide, setCurrentSlide] = useState(0);

    // Array of slides with image, title, and subtitle
    const slides = [
      {
        title: "Telecommunication Services",
        image: bg1,
        subtitle: "Providing top-tier telecommunication solutions across the region."
      },
      {
        title: "Information and Communications Technology",
        image: bg2,
        subtitle: "Innovative ICT solutions for the digital age."
      },
      {
        title: "Project Management",
        image: bg3,
        subtitle: "Expert project management for efficient execution."
      },
      {
        title: "Construction",
        image: bg4,
        subtitle: "Building the future with innovative construction solutions."
      },
      {
        title: "Training and Business Advisory",
        image: bg5,
        subtitle: "Providing training and business consultancy to foster growth."
      },
      {
        title: "Power and Energy",
        image: bg5,
        subtitle: "Reliable power and energy solutions for a sustainable future."
      }
    ];
  
    // Function to go to the next slide
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };
  
    // Function to go to the previous slide
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };


    // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Move to the next slide automatically
    }, 5000); // Change slides every 5 seconds

    // Clear the interval when the component is unmounted or when the user clicks a button
    return () => clearInterval(interval);
  }, []);


  return ( 
      <Box bg="" color="white" minH="100vh">
        {/* Navbar */}
        <NavBar />

        {/* Hero Section */}
        <Flex
          direction="column"
          justify="center"
          align="center"
          position="relative"
          minHeight="70vh"
          bgImage={`url(${slides[currentSlide].image})`}
          bgSize="cover"
          bgPosition="center"
          padding="2rem"
        >
      {/* Overlay to darken background for better text visibility */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.5)"
        zIndex="1"
      />

      {/* Text Section */}
      <Stack
        spacing={6}
        textAlign="center"
        zIndex="2" // Ensures text is above the background
        color="white"
        maxWidth="80%"
      >
        <Text fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold">
          {slides[currentSlide].title}
        </Text>
        <Text fontSize={{ base: 'md', md: 'lg' }}>
          {slides[currentSlide].subtitle}
        </Text>
      </Stack>

      {/* Navigation Buttons */}
      <Flex
        mt={{ base: 8, md: 4 }}
        justify="space-between"
        width={{ base: '100%', md: 'auto' }}
        position="absolute"
        bottom="10%" // Positioned at the bottom of the hero section
        zIndex="2"
      >
        <IconButton
          icon={<ArrowBackIcon />}
          aria-label="Previous"
          size="lg"
          variant="outline"
          mr={4}
          isRound
          onClick={prevSlide}
        />
        <IconButton
          icon={<ArrowForwardIcon />}
          aria-label="Next"
          size="lg"
          variant="outline"
          isRound
          onClick={nextSlide}
        />
      </Flex>
        </Flex>


    {/* Sevices section */}
     <ServicesSection />

     <SimpleStepsSection />

     <ClientsSection />

     <Footer />

      </Box> 
  );
}

export default Home;
