import { Box, Heading, Text, List, ListItem, VStack, UnorderedList } from '@chakra-ui/react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet';

function IctPage() {
  return (
        <>
           <Helmet>
                <meta charSet="utf-8" />
                <title>Molcom - Information and Communications Technology</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
         <NavBar />
            <Box maxW="1000px" py={10} mx={'auto'} >
            <Heading as="h1" size="xl" mb={6}> 
                Information and Communications Technology (ICT)
            </Heading>

            <VStack spacing={8} align="start">
                <Box>
                <Heading as="h2" size="lg" mb={4}>
                    Fiber Internet Connectivity
                </Heading>
                <Text mb={4}>
                    Molcom Multi-Concepts Limited provides a robust suite of business applications powered by cutting-edge satellite technology. Our VSAT internet solutions offer a range of features that cater to diverse needs, from basic connectivity to highly advanced functionalities.
                </Text>
                <UnorderedList spacing={2}>
                    <ListItem>Identity and Access Management</ListItem>
                    <ListItem>High-Speed Internet Access for ISPs, cyber cafés, banks, universities, government institutions, hotels, research centers, corporate offices, and remote individual users.</ListItem>
                    <ListItem>IP Backbone Connectivity tailored for telecom and financial institutions.</ListItem>
                    <ListItem>VPN Solutions for secure global interconnection of branch offices.</ListItem>
                    <ListItem>Toll-Quality Voice and Fax (VoIP)</ListItem>
                    <ListItem>Video Conferencing and Presentations</ListItem>
                    <ListItem>Interactive Distance Learning</ListItem>
                    <ListItem>Remote Server Replication for Disaster Recovery</ListItem>
                    <ListItem>Software Distribution and Remote Administration</ListItem>
                    <ListItem>POS/ATM System Connectivity</ListItem>
                    <ListItem>Alarm and Surveillance System Integration</ListItem>
                    <ListItem>TV Broadcasting</ListItem>
                </UnorderedList>
                </Box>

                <Box>
                <Heading as="h2" size="lg" mb={4}>
                    SCADA Systems
                </Heading>
                <Text mb={4}>
                    Molcom Multi-Concepts Limited specializes in advanced SCADA (Supervisory Control and Data Acquisition) systems designed to monitor and maintain power systems efficiently.
                </Text>
                <Text mb={4}>
                    Our services include:
                </Text>
                <UnorderedList spacing={2}>
                    <ListItem>Installation of Optical Ground Wires (OPGW) enhancing transmission line monitoring capabilities.</ListItem>
                    <ListItem>Configuration of Terminal Equipment for real-time monitoring of high-voltage transmission lines, substations, and transmission stations.</ListItem>
                </UnorderedList>
                <Text>
                    By implementing the latest technologies, we ensure our clients have the tools they need to manage their power systems effectively and reliably.
                </Text>
                </Box>
            </VStack>
            </Box>
        <Footer />
        </>
  );
}

export default IctPage;
