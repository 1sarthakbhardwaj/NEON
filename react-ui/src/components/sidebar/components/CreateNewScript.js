import React, { useState } from 'react';
import {
  Box,
  Heading,
  VStack,
  HStack,
  Select,
  Collapse,
  IconButton,
  Text,
  Flex,
  Button
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Input } from "@chakra-ui/react";
import { CloseIcon } from '@chakra-ui/icons';



const CreateNewScript = () => {
  const [isOpen, setIsOpen] = useState(true); // Set default state to open
  const [conditions, setConditions] = useState([]); // State for storing conditions

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const addCondition = () => {
    setConditions([...conditions, {}]);
  };

  const removeCondition = (index) => {
    setConditions(conditions.filter((_, i) => i !== index));
  };

  
  

  return (
  <>
      <Flex justifyContent="flex-start" width="100%">
      <Box
        bg="white"
        borderRadius="lg"
        boxShadow="base"
        p={4}
        width="100%"
        maxWidth="1500px"
        marginRight="auto"
        mt={4}
      >
  </Box>
</Flex>

<VStack spacing={9} align="start" pl="0px">
  <Box bg="white" borderRadius="md" boxShadow="base" p={2}>
    <Heading as="h2" size="md">
      AI-Driven Automation/ Create New Script
    </Heading>
  </Box>

  <Flex justifyContent="flex-start" width="100%">
    <Box
      bg="white"
      borderRadius="lg"
      boxShadow="base"
      p={4}
      width="100%"
      maxWidth="1500px"
      marginRight="auto"
      mt={4}
    >
      <HStack>
        <Text fontSize="xl" fontWeight="bold" ml={35}>
          General Information
        </Text>
        <IconButton
          icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          onClick={handleToggle}
          bgGradient="linear(to-r, blue.500, blue.200)"
        />
      </HStack>
      <Collapse in={isOpen}>
        <VStack align="start" spacing={4} ml={60}>
          <HStack spacing={10}>
            <Text minWidth="100px" whiteSpace="nowrap">
              Market Place:
            </Text>
            <Select placeholder="Select market place">
              <option value="shopee">Shopee</option>
              <option value="lazada">Lazada</option>
              <option value="amazon">Amazon</option>
              <option value="tiki">Tiki</option>
            </Select>
          </HStack>
          <HStack spacing={10}>
            <Text minWidth="100px" whiteSpace="nowrap">Country:</Text>
            <Select placeholder="Select country">
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="id">Indonesia</option>
              <option value="ph">Philippines</option>
              <option value="vn">Vietnam</option>
              <option value="th">Thailand</option>
              <option value="my">Malaysia</option>
              <option value="sg">Singapore</option>
              <option value="mm">Myanmar</option>
              <option value="kh">Cambodia</option>
            </Select>
          </HStack>
          <HStack spacing={10}>
            <Text minWidth="100px" whiteSpace="nowrap">Ad Type:</Text>
            <Select placeholder="Select ad type">
              <option value="product_search_ads">Product Search Ads</option>
              <option value="shop_ads">Shop Ads</option>
              <option value="discovery_ads">Discovery Ads</option>
            </Select>
          </HStack>
          <HStack spacing={10}>
            <Text minWidth="100px" whiteSpace="nowrap">Automation Target:</Text>
            <Select placeholder="Select automation target">
              <option value="sku_ad">SKU/Ad</option>
              <option value="ad_keyword"> Ad - Keyword </option>
            </Select>
          </HStack>
        </VStack>
      </Collapse>
    </Box>
</Flex>
</VStack>


<Flex justifyContent="flex-start" width="100%">
      <Box
        bg="white"
        borderRadius="lg"
        boxShadow="base"
        p={4}
        width="100%"
        maxWidth="1500px"
        marginRight="auto"
        mt={4}
      >
        <VStack spacing={10} align="start" pl="0px">
          <Heading as="h2" size="md">
            Conditions :
          </Heading>
          {conditions.map((condition, index) => (
            <HStack key={index} spacing={10}>
              {index === 0 ? (
                <Text minWidth="100px" whiteSpace="nowrap">
                  Where:
                </Text>
              ) : (
                <Select minWidth="100px" whiteSpace="nowrap" placeholder="Select">
                  <option value="and">AND</option>
                  <option value="or">OR</option>
                </Select>
              )}
              <Select placeholder="Select field">
              <option value="average_position">Average Position</option>
                  <option value="position">Position</option>
                  <option value="impressions">Impressions</option>
                  <option value="clicks">Clicks</option>
                  <option value="spend">Spend</option>
                  <option value="ads_gmv">Ads GMV</option>
                  <option value="ads_roas">Ads ROAS</option>
                  <option value="ads_item_sold">Ads Item Sold</option>
                  <option value="ads_orders">Ads Orders</option>
              </Select>
              <Select placeholder="Select time frame">
              <option value="last">Last</option>
                  <option value="current">Current</option>
                  <option value="today">Today</option>
              </Select>
              <Select placeholder="Select comparison operator">
              <option value="=">=</option>
                  <option value="<">{'<'}</option>
                  <option value=">">{'>'}</option>
              </Select>
              <Input
                placeholder="Enter value"
                size="md"
                variant="outline"
                borderColor="gray.300"
                borderWidth={1}
                borderRadius="md"
              />
              {index > 0 && (
               <IconButton
               icon={<CloseIcon boxSize="10px" />}
               colorScheme="red"
               variant=""
               onClick={() => removeCondition(index)}
             />
              )}
            </HStack>
          ))}
          <IconButton
            onClick={addCondition}
            bgGradient="linear(to-r, blue.500, blue.200)"
            _hover={{ bgGradient: "linear(to-r, blue.400, blue.300)" }}
            borderRadius="md"
            p={2}
          >
            <Box as="span" display="flex" alignItems="center">
              <Text as="span" mr={2} color="white">
                +
              </Text>
              <Text as="span" fontSize="sm" color="white">
                Add More Condition
              </Text>
            </Box>
          </IconButton>
        </VStack>
      </Box>
    </Flex>

    <Flex justifyContent="flex-start" width="100%">
  <Box
    bg="white"
    borderRadius="lg"
    boxShadow="base"
    p={4}
    width="100%"
    maxWidth="1500px"
    marginRight="auto"
    mt={4}
  >
    <VStack spacing={10} align="start" pl="0px">
      <Heading as="h2" size="md">
        Action :
      </Heading>
      <HStack spacing={10}>
        <Text minWidth="100px" whiteSpace="nowrap">
          Action:
        </Text>
        <Select placeholder="Select action">
          <option value="bidding_price">Bidding Price</option>
          <option value="status">Status</option>
        </Select>
        <Select placeholder="Select operation">
          <option value="activate">Activate</option>
          <option value="pause">Pause</option>
          <option value="increase">Increase</option>
          <option value="decrease">Decrease</option>
        </Select>
      </HStack>
      <HStack spacing={10}>
        <Text minWidth="100px" whiteSpace="nowrap">
          Value:
        </Text>
        <Select placeholder="Select value type">
          <option value="percentage">Percentage</option>
          <option value="value">Value</option>
        </Select>
        <Input
          placeholder="Enter value"
          size="md"
          variant="outline"
          borderColor="gray.300"
          borderWidth={1}
          borderRadius="md"
        />
      </HStack>
      <HStack spacing={10}>
        <Text minWidth="100px" whiteSpace="nowrap">
          Maximum value:
        </Text>
        <Input
          placeholder="Enter maximum value"
          size="md"
          variant="outline"
          borderColor="gray.300"
          borderWidth={1}
          borderRadius="md"
        />
      </HStack>
    </VStack>
  </Box>
</Flex>

<Flex justifyContent="flex-end" width="100%" p={4}>
  <Button variant="outline" colorScheme="gray" mr={4}>
    Cancel
  </Button>
  <Button
    bgGradient="linear(to-r, blue.500, blue.200)"
    _hover={{ bgGradient: "linear(to-r, blue.400, blue.300)" }}
  >
    Submit
  </Button>
</Flex>


  </>
);

};

export default CreateNewScript;

