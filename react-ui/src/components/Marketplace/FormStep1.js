import React, { useState } from 'react';
import {
  VStack,
  HStack,
  Text,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
  Flex,
  Center,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

import ShopeeLogo from '../../assets/img/MiniSidebar/Shopee_logo.svg';
import lazada from '../../assets/img/MiniSidebar/lazada.png';
import amazonlogo from '../../assets/img/MiniSidebar/amazon.png';
import instacart from '../../assets/img/MiniSidebar/instacart.png';
import walmart from '../../assets/img/MiniSidebar/walmart.png';
import tokopedia from '../../assets/img/MiniSidebar/tokopedia.png';
import bukalapak from '../../assets/img/MiniSidebar/bukalapak.png';
import tiki from '../../assets/img/MiniSidebar/tiki.jpeg';

const platforms = [
  { label: 'Shopee', logo: ShopeeLogo },
  { label: 'Lazada', logo: lazada },
  { label: 'Amazon', logo: amazonlogo },
  { label: 'Instacart', logo: instacart },
  { label: 'Walmart', logo: walmart },
  { label: 'Tokopedia', logo: tokopedia },
  { label: 'Bukalapak', logo: bukalapak },
  { label: 'Tiki', logo: tiki },
];

function FormStep1({ onPlatformSelect }) {
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform);
    onPlatformSelect(platform);
    localStorage.setItem('selectedPlatform', JSON.stringify(platform));
  };

    return (
      <Flex justifyContent="center" w="100%" mt={6}>
        <VStack
          spacing={6}
          w={{ base: '90%', sm: '80%', md: '60%', lg: '50%' }}
          bg="white"
          borderRadius="md"
          p={6}
          boxShadow="md"
        >
          <Center>
            <Text fontSize="3xl" fontWeight="bold">
              Add Integration
            </Text>
          </Center>
          <Box w="100%">
            <Menu>
            <Center>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                bg="blue.500"
                color="white"
                _hover={{ bg: 'blue.600' }}
                _active={{ bg: 'blue.700' }}
                px={1.5}
                borderRadius="md"
                h="10"
                w="90"
                fontSize="large"
                fontWeight="medium"
              >
                {selectedPlatform ? (
                  <HStack spacing={2}>
                    <Image src={selectedPlatform.logo} boxSize="20px" />
                    <Text>{selectedPlatform.label}</Text>
                  </HStack>
                ) : (
                  <Center w="100%">
                    Select your e-commerce platform
                  </Center>
                )}
              </MenuButton>
              </Center>
    
              <MenuList>
                {platforms.map((platform, index) => (
                  <MenuItem
                    key={index}
                    h="10"
                    w="80"
                    fontSize="large"
                    fontWeight="medium"
                    onClick={() => handlePlatformSelect(platform)}
                    icon={
                      <Image
                        src={platform.logo}
                        boxSize="20px"
                        borderRadius="full"
                      />
                    }
                  >
                    {platform.label}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
          <HStack spacing={2} justifyContent="center">
            <Text>Your e-commerce platform is not listed?</Text>
            <Text fontWeight="bold" color="blue.500">
              Let us know
            </Text>
          </HStack>
        </VStack>
      </Flex>
    );
    
}

export default FormStep1;

