import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionBox = motion.create(Box); // Framer-motion wrapper for animation

const ServicesSection = () => {
  // Card variants for animations
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      px="4"
      py="8"
      bg="gray.100"
    >
      {/* Title Section */}
      <Stack align="center" spacing={4} mb={8}>
        <Heading as="h2" color={'#01112E'} fontSize={{ base: '2xl', md: '4xl' }} textTransform='uppercase'>
          Our Industry-Leading Services
        </Heading>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          textAlign="justify"
          maxWidth="800px"
          color={'black'}
        >
          We specialize in technology,
          construction, power, and project management solutions designed to help
          businesses across Africa thrive. 
          <b>Our mission is to provide the  expertise and tools needed to excel in a rapidly evolving world. </b>

          With a diverse range of advanced services and a team of seasoned professionals, we deliver tailored solutions to meet your unique needs. 
          If your business is aiming high but facing challenges, Molcom Multi-Concepts is here to help you reach your full potential
        </Text>
      </Stack>

      {/* Cards Section */}
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-around"
        align="center"
        width="100%"
        maxWidth="1200px"
      >
        {/* Card 1 */}
        <MotionBox
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          p="6"
          bg="white"
          borderRadius="md"
          boxShadow="lg"
          m="4"
          color={'#01112E'} 
          maxW={{ base: '100%', md: '45%' }}
        >
          <Heading as="h3" fontSize="xl" mb={4} textTransform='uppercase'>
            Telecommunications Solutions
          </Heading>
          <Text fontSize="md" mb={6}>
                At MOLCOM, we recognize that the telecommunications landscape is ever-evolving and that your business needs a partner who understands these complexities. 
                Whether you're expanding your network infrastructure, enhancing connectivity, or implementing innovative communication solutions, we are here to ensure your success. 
         </Text>
          <Button colorScheme="blue" variant="solid" as={Link} to="/telecom">
            Find Out More
          </Button>
        </MotionBox>

        {/* Card 2 */}
        <MotionBox
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          p="6"
          bg="white"
          borderRadius="md"
          boxShadow="lg"
          m="4"
          maxW={{ base: '100%', md: '45%' }}
          color={'#01112E'} 
        >
          <Heading as="h3" fontSize="xl" mb={4} textTransform='uppercase'>
            ICT Services
          </Heading>
          <Text fontSize="md" mb={6}>
                 At MOLCOM, we understand that every client's needs are unique, especially in the realm of ICT. Whether you’re seeking advanced fiber internet connectivity, reliable satellite solutions, cutting-edge wireless technology, or robust VPN services, we’re committed to supporting your business at every stage of its digital transformation. Partner with us, and you’ll have a dedicated ally in navigating the complexities of technology to ensure your continued success.
          </Text>
          <Button colorScheme="blue" variant="solid" as={Link} to="/ict">
            Find Out More
          </Button>
        </MotionBox>


      </Flex>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-around"
        align="center"
        width="100%"
        maxWidth="1200px"
      >
        {/* Card 1 */}
        <MotionBox
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          p="6"
          bg="white"
          borderRadius="md"
          boxShadow="lg"
          m="4"
          color={'#01112E'} 
          maxW={{ base: '100%', md: '45%' }}
        >
          <Heading as="h3" fontSize="xl" mb={4} textTransform='uppercase'>
            project management
          </Heading>
          <Text fontSize="md" mb={6}>
           At MOLCOM, we revolutionize project management by providing clients with innovative solutions that streamline project execution and enhance efficiency. 
           Our team utilizes advanced methodologies and digital tools to manage every phase of your projects with precision, ensuring that your objectives are met on time and within budget.
          </Text>
          <Button colorScheme="blue" variant="solid" as={Link} to="/project-management">
            Find Out More
          </Button>
        </MotionBox>

        {/* Card 2 */}
        <MotionBox
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          p="6"
          bg="white"
          borderRadius="md"
          boxShadow="lg"
          m="4"
          maxW={{ base: '100%', md: '45%' }}
          color={'#01112E'} 
        >
          <Heading as="h3" fontSize="xl" mb={4} textTransform='uppercase'>
                construction 
          </Heading>
          <Text fontSize="md" mb={6}>
                At MOLCOM, we are dedicated to transforming construction projects with precision and efficiency. 
                We specialize in delivering expert consulting in construction, engineering, and architecture to help you maximize your project's potential and achieve impactful results. 
 
          </Text>
          <Button colorScheme="blue" variant="solid" as={Link} to="/construction">
            Find Out More
          </Button>
        </MotionBox>
        
      </Flex>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-around"
        align="center"
        width="100%"
        maxWidth="1200px"
      >
        {/* Card 1 */}
        <MotionBox
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          p="6"
          bg="white"
          borderRadius="md"
          boxShadow="lg"
          m="4"
          color={'#01112E'} 
          maxW={{ base: '100%', md: '45%' }}
        >
          <Heading as="h3" fontSize="xl" mb={4} textTransform='uppercase'>
            Training and advisory services
          </Heading>
          <Text fontSize="md" mb={6}>
            At MOLCOM, we empower businesses by offering comprehensive training and advisory services tailored to enhance organizational growth and operational excellence. 
            Our expert team provides customized solutions that address your unique challenges, equipping you with the tools and strategies needed to drive innovation, optimize performance, and achieve sustainable success in an ever-evolving marketplace.
          </Text>
          <Button colorScheme="blue" variant="solid" as={Link} to="/training-and-advisory">
            Find Out More
          </Button>
        </MotionBox>

        {/* Card 2 */}
        <MotionBox
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          p="6"
          bg="white"
          borderRadius="md"
          boxShadow="lg"
          m="4"
          maxW={{ base: '100%', md: '45%' }}
          color={'#01112E'} 
        >
          <Heading as="h3" fontSize="xl" mb={4} textTransform='uppercase'>
                Power and Energy
          </Heading>
          <Text fontSize="md" mb={6}>
            At MOLCOM, we empower clients in the power and energy sectors to innovate and excel. 
            By leveraging advanced technologies and industry expertise, we provide cutting-edge solutions to enhance your energy infrastructure and optimize power generation. Our focus is on delivering high-performance results and helping you navigate the complexities of the energy landscape with confidence.
          </Text>
          <Button colorScheme="blue" variant="solid" as={Link} to="/power-and-energy">
            Find Out More
          </Button>
        </MotionBox>
        
      </Flex>


      
    </Flex>
  );
};

export default ServicesSection;
