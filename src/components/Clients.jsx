import React, { useState, useEffect } from 'react';
import { Box, Flex, Heading, IconButton, Image } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

import cl1 from '../assets/clients/abuja.png';
import cl2 from '../assets/clients/alcatel.png';
import cl3 from '../assets/clients/client-logo1.png';
import cl4 from '../assets/clients/client-logo2.png';
import cl5 from '../assets/clients/client-logo3.png';
import cl6 from '../assets/clients/client-logo4.png';
import cl7 from '../assets/clients/client-logo5.png';
import cl8 from '../assets/clients/client-logo6.png';
import cl9 from '../assets/clients/ihs.png';
import cl10 from '../assets/clients/micro.png';
import cl11 from '../assets/clients/phcn.png';
import cl12 from '../assets/clients/pnb.png';
import cl13 from '../assets/clients/url-1.jpg';
import cl14 from '../assets/clients/url.jpg';

const images = [cl1,cl2,cl3,cl4,cl5,cl6,cl7,cl8 ,cl9,cl10,cl11,cl12,cl13,cl14];

const itemsToShow   = 7;    // Number of images to show at once
const imageWidth    = 100; // Width of each image in pixels
const imageMargin   = 20; // Margin between images in pixels
const carouselWidth = itemsToShow * (imageWidth + imageMargin); // Total width of the carousel in pixels

const ClientCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic scrolling effect every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % (images.length - itemsToShow + 1)
      );
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (images.length - itemsToShow + 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - itemsToShow : prevIndex - 1
    );
  };

  return (
    <Box>
         <Heading as="h2" textAlign={'center'} color={'#01112E'} fontSize={{ base: '2xl', md: '4xl' }}>
          Our Clients
        </Heading>
 
        <Box position="relative" w={`90%`} mx="auto" overflow="hidden"  bg={'white'} paddingBottom={10} paddingTop={10}>
        {/* Carousel container */}

        <Flex
            direction="row"
            w={`${images.length * (imageWidth + imageMargin)}px`}
            transform={`translateX(-${currentIndex * (imageWidth + imageMargin)}px)`}
            transition="transform 0.5s ease"
        
        >
            {images.map((src, index) => (
            <Box
                key={index}
                flexShrink={0}
                w={`${imageWidth}px`}
                m={`0 ${imageMargin / 2}px`}
                borderBlock={1}
                borderBlockColor="gray.200"
                rounded="md"
                cursor="pointer"
                _hover={{ bg: 'gray.200', transition: 'bg 0.3s ease' }}
            >
                <Image src={src} alt={`Client ${index + 1}`} w="100%" h="70px" />
            </Box>
            ))}
        </Flex>

        {/* Left Arrow */}
        <IconButton
            aria-label="Previous Slide"
            icon={<ChevronLeftIcon />}
            position="absolute"
            top="50%"
            left="0"
            transform="translateY(-50%)"
            onClick={prevSlide}
            zIndex="1"
            variant="outline"
        />

        {/* Right Arrow */}
        <IconButton
            aria-label="Next Slide"
            icon={<ChevronRightIcon />}
            position="absolute"
            top="50%"
            right="0"
            transform="translateY(-50%)"
            onClick={nextSlide}
            zIndex="1"
            variant="outline"
        />
        </Box>
   </Box>
  );
};

export default ClientCarousel;
