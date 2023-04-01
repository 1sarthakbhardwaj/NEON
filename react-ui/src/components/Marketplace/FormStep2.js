import React, { useState } from 'react';
import {
  Flex,
  VStack,
  Text,
  Box,
  Grid,
  GridItem,
  Button,
  HStack,
} from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';

const continents = [
  'Africa',
  'Asia',
  'Europe',
  'North America',
  'South America',
  'Australia/Oceania',
  'Antarctica',
];

function FormStep2(/* { onRegionSelect } */) {
  const [selectedContinent, setSelectedContinent] = useState(null);

  const handleContinentSelect = (continent) => {
    setSelectedContinent(continent);
    // onRegionSelect(continent);
  };

  return (
    <Flex justifyContent="center" mt={6} alignItems="center" ml="510px">
      <VStack spacing={6}>
        <Box
          bg="white"
          borderRadius="md"
          borderWidth="1px"
          borderColor="gray.200"
          p={6}
        >
          <VStack alignItems="flex-start" spacing={4}>
            <Text fontSize="4xl" fontWeight="bold">
              What region is this account in?
            </Text>
            <Grid templateColumns="repeat(2, 1fr)" gap={4} w="100%">
              {continents.map((continent, index) => (
                <GridItem key={index}>
                  <Button
                    w="100%"
                    borderRadius="md"
                    h="12"
                    fontSize="large"
                    fontWeight="medium"
                    bg={
                      selectedContinent === continent ? 'blue.500' : 'gray.200'
                    }
                    color={selectedContinent === continent ? 'white' : 'gray.700'}
                    _hover={{ bg: 'blue.600' }}
                    _active={{ bg: 'blue.700' }}
                    onClick={() => handleContinentSelect(continent)}
                  >
                    <HStack spacing={2}>
                      <Box
                        boxSize="6"
                        borderRadius="full"
                        bg="blue.500"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <ArrowRightIcon color="white" />
                      </Box>
                      <Text>{continent}</Text>
                    </HStack>
                  </Button>
                </GridItem>
              ))}
            </Grid>
          </VStack>
        </Box>
      </VStack>
    </Flex>
  );
}

export default FormStep2;
