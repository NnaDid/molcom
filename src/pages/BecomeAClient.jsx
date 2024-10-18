import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Heading,
    Text,
    VStack,
    Link,
    Select,
    Textarea,
    Checkbox,
  } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import bg from '../assets/blueBackground.jpg';
  
  function BecomeAClient() {
    return (
      <Box bg="gray.50">
        <NavBar />
       
        <Box>
            <Box
                backgroundImage={`url(${bg})`} 
                backgroundSize="cover"
                backgroundPosition="center"
                textAlign="center"
                py={20}
                px={4}
                color="white"
                >
                 <Box w='70%' mx='auto'>
                    <Heading as="h1" fontSize={["2xl", "4xl"]}>
                        How Can We Help Your Business?
                    </Heading>
                    <Text fontSize={["md", "lg"]} my={4} w='70%'  mx='auto'>
                        Thank you for your interest in Molcom Multi-Concepts’s services. Please take
                        a moment to fill out the form. A representative will get in touch with
                        you soon.
                    </Text>
                </Box>
            </Box>
  
            {/* Form and Contact Section */}
            <Flex
                direction={["column", "row"]}
                maxW="7xl"
                mx="auto"
                mt={-20}
                bg="white"
                // shadow="lg"
                p={8}
                borderRadius={0}
                justify="space-between"
                w='70%'
                >
            {/* Form Section */}
            <Box flex="2" pr={[0, 8]}>
                <VStack spacing={5} align="start">
                <Heading fontSize="lg">Complete the form and we’ll contact you shortly</Heading>
                <Text color="gray.500">All fields are required</Text>
    
                {/* Form */}
                <Stack spacing={4} w="100%">
                    <FormControl isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <Input placeholder="Full Name" />
                    </FormControl>
    
                    <FormControl isRequired>
                    <FormLabel>Company Email</FormLabel>
                    <Input type="email" placeholder="Type your email" />
                    </FormControl>
    
                    <FormControl isRequired>
                    <FormLabel>Phone</FormLabel>
                    <Input type="tel" placeholder="Phone" />
                    </FormControl>
    
                    <FormControl>
                        <FormLabel>Organization</FormLabel>
                        <Input placeholder="Organization" />
                    </FormControl>

                     {/* New Fields */}
              <FormControl isRequired>
                <FormLabel>Job Role</FormLabel>
                <Select placeholder="Select Job Role">
                  <option disabled selected>Job Role</option> 
                  <option value="C-Suite">C-Suite</option> 
                  <option value="Head of Recruitment">Head of Recruitment</option>
                  <option value="HR Professional">HR Professional</option>
                  <option value="Business Manager">Business Manager</option>
                  <option value="Team Lead">Team Lead</option>
                  <option value="Team member">Team member</option>
                  <option value="Self-employed">Self-employed</option>
                  <option value="Other">Other</option>
                  <option value="Student">Student</option>
                  <option value="Manager">Manager</option>
                  <option value="HR Leader">HR Leader</option>
                  <option value="Compliance">Compliance</option> 
                  <option value="Lecturer">Lecturer</option>
                  <option value="Senior HR Adviser">Senior HR Adviser</option>
                  <option value="Head Strategy">Head Strategy</option>
                  <option value="Public Relations">Public Relations</option>
                  <option value="Lead Consultant">Lead Consultant</option> 
                  <option value="Managing Consultant">Managing Consultant</option> 
                  <option value="HR Business Partner">HR Business Partner</option>
                  <option value="Child Development Director">Child Development Director</option>
                  <option value="Professor">Professor</option>
                  <option value="Human Resources/Admin Executive">Human Resources/Admin Executive</option> 
                  <option value="Training manager">Training manager</option>
                  <option value="Associate Pastor">Associate Pastor</option>
                  <option value="Founder/CEO">Founder/CEO</option> 
                  <option value="Research Analyst">Research Analyst</option> 
                  <option value="HR Consultant">HR Consultant</option> 
                  <option value="Project Manager">Project Manager</option>
                  <option value="Lead HR Consultant">Lead HR Consultant</option>
                  <option value="Organisational Development Advisor">Organisational Development Advisor</option>
                  <option value="Head HR and Admin">Head HR and Admin</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Educator">Educator</option>
                  <option value="CEO">CEO</option><option value="Head,  L&amp;D">Head,  L&amp;D</option> 
                  <option value="Head,  Group Human Resources">Head,  Group Human Resources</option>
                  <option value="Consultant">Consultant</option>
                  <option value="Human Resources Specialist">Human Resources Specialist</option>
                  <option value="Dean,  Specialized Banking School">Dean,  Specialized Banking School</option> 
                  <option value="Representative">Representative</option>
                  <option value="Food Specialist">Food Specialist</option> 
                  <option value="General Ledger Services Manager">General Ledger Services Manager</option>
                  <option value="HR Officer">HR Officer</option>
                  <option value="Snr HR Officer">Snr HR Officer</option> 
                  <option value="Talent Acquisition and Development">Talent Acquisition and Development</option>
                  <option value="MD">MD</option>
                  <option value="Human Resources Manager">Human Resources Manager</option>
                  <option value="Head of Human Resources">Head of Human Resources</option>  
                  <option value="Team Lead">Team Lead</option> 
                  <option value="Marketer">Marketer</option>
                  {/* Add more options as needed */}
                </Select>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>What Service Are You Interested In?</FormLabel>
                <Select placeholder="Select a Service"> 
                  <option value="Consulting">Consulting</option>
                  <option value="Software Development">Software Development</option>
                  <option value="IT Support">IT Support</option>
                  <option value="Construction">Construction</option>
                  <option value="Telecommunication">Telecommunication</option> 
                  <option value="ICT">ICT Services</option> 
                  <option value="Project Management">Project Management</option> 
                  <option value="Project Management">Project Management</option> 
                  <option value="Training And Advisory">Training And Business Advisory</option> 
                  <option value="Power And Energy">Power And Energy</option>  
                </Select>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Brief Overview of How We Can Be of Help</FormLabel>
                <Textarea placeholder="Provide a brief description" />
              </FormControl>

              <Flex justify="space-between" gap={4}>
                <FormControl>
                  <FormLabel>Company Size</FormLabel>
                  <Select placeholder="Select Company Size">
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-200</option>
                    <option>201-500</option>
                    <option>500+</option>
                  </Select>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>How Did You Hear About Us?</FormLabel>
                  <Select placeholder="Select an option">
                    <option>Google Search</option>
                    <option>LinkedIn</option>
                    <option>Referral</option>
                    <option>Advertisement</option>
                  </Select>
                </FormControl>
              </Flex>

              {/* Privacy Policy Checkbox */}
              <Checkbox isRequired>
                I have read the{" "}
                <Link color="blue.500" href="#">
                  Privacy Policy
                </Link>{" "}
                and agree to its terms.
              </Checkbox>

              {/* Email Updates Checkbox */}
              <Checkbox>
                I would like to receive updates, tips, and offers via email.
              </Checkbox>
    
                    <Button colorScheme="blue" size="lg" width="full">
                       Submit
                    </Button>
                </Stack>
                </VStack>
            </Box>
    
            {/* Contact Information Section */}
            <Box flex="1" bg="gray.100" p={6} mt={[8, 0]} borderRadius="md">
                <Heading fontSize="lg">Give us a call</Heading>
                <Text mt={2}>
                <Link href="tel:+2348137184429" color="blue.500">
                    +234(0)813-7184-429
                </Link>
                </Text>
                <Text mt={2}>8 a.m. – 5 p.m. WAT</Text>
                <Text>Monday through Friday</Text>
    
                <Heading mt={8} fontSize="lg">
                  Looking for something else?
                </Heading>
                <Text mt={2}>
                Get help with:
                </Text>
                <VStack align="start" spacing={2} mt={2}>
                    <Link color="blue.500" to="/careers">Applying for a job</Link>
                    <Link color="blue.500">Other inquiries</Link>
                </VStack>
            </Box>
            </Flex>
        </Box>

        <Footer />
      </Box>
    );
  }
  
  export default BecomeAClient;
  