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
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const CreateNewScript = () => {
  const [isOpen, setIsOpen] = useState(true); // Set default state to open
  const [conditions, setConditions] = useState([]); // State for storing conditions

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const addCondition = () => {
    setConditions([...conditions, {}]);
  };

  return (
    <Flex justifyContent="flex-start" width="100%">
      <Box
        bg="white"
        borderRadius="lg"
        boxShadow="base"
        p={4}
        width="100%" // Adjust the width here, e.g., "80%", "60%" or "1200px", etc.
        maxWidth="1500px" // Set a maximum width if necessary
        marginRight="auto"
      >
        <VStack spacing={9} align="start" pl="0px">
          <Box bg="white" borderRadius="md" boxShadow="base" p={2}>
            <Heading as="h2" size="md">
              AI-Driven Automation/ Create New Script
            </Heading>
          </Box>
          <HStack>
            <Text fontSize="xl" fontWeight="bold">
              General Information
            </Text>
            <IconButton
              icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              onClick={handleToggle}
              bgGradient="linear(to-r, blue.500, blue.200)"
            />
          </HStack>
          <Collapse in={isOpen}>
            <VStack align="start" spacing={4}>
              <HStack>
                <Text>Market Place:</Text>
                <Select placeholder="Select market place">
                  <option value="shopee">Shopee</option>
                  <option value="lazada">Lazada</option>
                  <option value="amazon">Amazon</option>
                  <option value="tiki">Tiki</option>
                </Select>
              </HStack>
              <HStack>
                <Text>Country:</Text>
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
              <HStack>
                <Text>Ad Type:</Text>
                <Select placeholder="Select ad type">
                  <option value="product_search_ads">Product Search Ads</option>
                  <option value="shop_ads">Shop Ads</option>
                  <option value="discovery_ads">Discovery Ads</option>
                </Select>
              </HStack>
              <HStack>
                <Text>Automation Target:</Text>
                <Select placeholder="Select automation target">
                  <option value="sku_ad">SKU/Ad</option>
                  <option value="ad_keyword"
                >
                  Ad - Keyword
                </option>
              </Select>
            </HStack>
            {conditions.map((condition, index) => (
              <HStack key={index}>
                <Text>Where:</Text>
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
                <input type="text" placeholder="Enter value" />
              </HStack>
            ))}
            <IconButton
              icon="+"
              onClick={addCondition}
              bgGradient="linear(to-r, blue.500, blue.200)"
            >
              Add More Condition
            </IconButton>
          </VStack>
        </Collapse>
      </VStack>
    </Box>
  </Flex>
);

};

export default CreateNewScript;

