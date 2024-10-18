import React from 'react';
import { Box, Heading, SimpleGrid, Avatar, VStack, Text } from '@chakra-ui/react';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const TeamMemberCard = ({ name, title, image }) => (
  <VStack
    bg="white"
    boxShadow="lg"
    borderRadius="lg"
    p={4}
    _hover={{ transform: 'scale(1.05)', transition: '0.3s ease-in-out' }}
  >
    <Avatar src={image} size="xl" mb={4} />
    <Text fontWeight="bold" fontSize="lg">
      {name}
    </Text>
    <Text fontSize="sm" color="gray.600">
      {title}
    </Text>
  </VStack>
);

const Teams = () => {
  const teamMembers = [
    { name: 'Jane Doe', title: 'CEO', image: '/jane-doe.jpg' },
    { name: 'John Smith', title: 'CTO', image: '/john-smith.jpg' },
    { name: 'Alice Johnson', title: 'CFO', image: '/alice-johnson.jpg' },
    // Add more team members as needed
  ];

  return (
      <>
        <NavBar />
            <Box p={8} bg="gray.100" textAlign="center">
          <Heading as="h1" size="2xl" mb={12}>
            Meet Our Team
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                title={member.title}
                image={member.image}
              />
            ))}
          </SimpleGrid>
        </Box>
        <Footer />
      </>
  );
};

export default Teams;
