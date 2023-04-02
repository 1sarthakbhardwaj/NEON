import React, { useState, useEffect } from 'react';
import {
  VStack,
  HStack,
  Text,
  Box,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { countriesByContinent } from './countriesByContinent';

function FormStep3() {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const platform = JSON.parse(localStorage.getItem('selectedPlatform'));
    setSelectedPlatform(platform);

    const continent = JSON.parse(localStorage.getItem('selectedContinent'));
    setSelectedContinent(continent);
  }, []);

  const countries = selectedContinent
    ? countriesByContinent[selectedContinent]
    : [];

  return (
    <Flex justifyContent="center" w="100%" mt={6}>
      <VStack spacing={6} w="80%" bg="white" borderRadius="md" p={6}>
        <Text fontSize="4xl" fontWeight="bold">
          Connect Selling Partner
        </Text>
        <Divider borderColor="gray.200" />
        <Text>
          You must have a professional marketplace{' '}
          {selectedPlatform && selectedPlatform.label} account for sellers in
          the marketplace you're connecting to.
        </Text>

        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            bg="blue.500"
            color="white"
            _hover={{ bg: 'blue.600' }}
            _active={{ bg: 'blue.700' }}
            px={4}
            borderRadius="md"
            h="10"
            w="80"
            fontSize="large"
            fontWeight="medium"
          >
            {selectedCountry || 'Select Region/Country'}
          </MenuButton>
          <MenuList>
            {countries.map((country, index) => (
              <MenuItem
                key={index}
                h="10"
                w="80"
                fontSize="large"
                fontWeight="medium"
                onClick={() => setSelectedCountry(country)}
              >
                {country}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </VStack>
    </Flex>
  );
}

export default FormStep3;
