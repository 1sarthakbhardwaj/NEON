import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Cell } from 'recharts';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Select, Input, Button, Flex, VStack, HStack } from '@chakra-ui/react';
import { ResponsiveContainer } from 'recharts';
import { Text } from '@chakra-ui/react';
import CreateNewScript from './CreateNewScript';


const data = [
  
  {
    "Page": 1,
    "Rank": 1,
    "Paid": "",
    "Badge": "Prime | Amazon's Choice",
    "Brand": "Olay",
    "Product ID": "B007M81B4M",
    "Title": "Olay Regenerist Micro-Sculpting Cream Face Moisturizer with Hyaluronic Acid & Niacinamide  Fragrance-Free  1.7 oz",
    "Usage Title": "",
    "Usage Description": "",
    "Usage Bullet": "",
    "Rating": 4.6,
    "MSRP": "$27.49",
    "Sale Price": "$24.35",
    "Availability": "",
    "Shipping Option": ""
  },
  {
    "Page": 1,
    "Rank": 2,
    "Paid": "",
    "Badge": "",
    "Brand": "Olay",
    "Product ID": "B0B529GK2M",
    "Title": "Olay Regenerist Hyaluronic + Peptide 24 Hydrating Gel  Fragrance Free  Face Moisturizer  1.7 Oz.",
    "Usage Title": "",
    "Usage Description": "",
    "Usage Bullet": "",
    "Rating": 4.6,
    "MSRP": "",
    "Sale Price": "$25.90",
    "Availability": "Only 13 left in stock - order soon.",
    "Shipping Option": ""
  },
  {
    "Page": 1,
    "Rank": 3,
    "Paid": "",
    "Badge": "Prime",
    "Brand": "Olay",
    "Product ID": "B08MXWFRKM",
    "Title": "Olay Regenerist Collagen Peptide 24 Face Moisturizer Cream with Niacinamide for Firmer Skin  Anti-Wrinkle Fragrance-Free 1.7 oz  Includes Olay Whip Travel Size for Dry Skin",
    "Usage Title": "",
    "Usage Description": "",
    "Usage Bullet": "",
    "Rating": 4.5,
    "MSRP": "$34.99",
    "Sale Price": "$29.99",
    "Availability": "",
    "Shipping Option": ""
  },
  {
    "Page": 1,
    "Rank": 4,
    "Paid": "",
    "Badge": "Prime",
    "Brand": "Olay",
    "Product ID": "B00EYYB994",
    "Title": "Olay Total Effects 7-in-1 Anti Aging Day Cream Normal  SPF 15 50 Gram",
    "Usage Title": "",
    "Usage Description": "",
    "Usage Bullet": "",
    "Rating": 4.6,
    "MSRP": "$25.99",
    "Sale Price": "$16.90",
    "Availability": "",
    "Shipping Option": ""
  },
  {
    "Page": 1,
    "Rank": 5,
    "Paid": "",
    "Badge": "Prime",
    "Brand": "Facial",
    "Product ID": "B00HB2JQNM",
    "Title": "Facial Moisturizing Lotion SPF 30 by Olay Total Effects for Dry Skin  7 Benefits including Minimize Pores  Anti-Aging  1.7 oz",
    "Usage Title": "",
    "Usage Description": "",
    "Usage Bullet": "",
    "Rating": 4.6,
    "MSRP": "",
    "Sale Price": "$23.48",
    "Availability": "",
    "Shipping Option": ""
  },
  {
    "Page": 1,
    "Rank": 6,
    "Paid": "",
    "Badge": "Prime",
    "Brand": "Face",
    "Product ID": "B018HGU6SO",
    "Title": "Face Moisturizer by Olay Regenerist Microsculpting Cream With SPF 30 Sunscreen  and Vitamin E for Advanced Anti-Aging  50ml",
    "Usage Title": "",
    "Usage Description": "",
    "Usage Bullet": "",
    "Rating": 4.6,
    "MSRP": "",
    "Sale Price": "$27.48",
    "Availability": "",
    "Shipping Option": ""
  },
  {
    "Page": 1,
    "Rank": 7,
    "Paid": "",
    "Badge": "Prime",
    "Brand": "Face",
    "Product ID": "B001LF4BDK",
    "Title": "Face Moisturizer by Olay   Active Hydrating Beauty Fluid Lotion  Original Facial Moisturizer  4 Oz. (Pack of 2) Packaging may Vary",
    "Usage Title": "",
    "Usage Description": "",
    "Usage Bullet": "",
    "Rating": 4.7,
    "MSRP": "",
    "Sale Price": "$19.98",
    "Availability": "",
    "Shipping Option": ""
  },
  {
    "Page": 1,
    "Rank": 8,
    "Paid": "",
    "Badge": "Prime",
    "Brand": "Olay",
    "Product ID": "B08CFKB29L",
    "Title": "Olay Regenerist Retinol 24 Max Moisturizer  Retinol 24 Max Hydrating Night Face Cream  Fragrance-Free Non Greasy Feeling 1.7 oz  Includes Olay Whip Travel Size for Dry Skin",
    "Usage Title": "",
    "Usage Description": "",
    "Usage Bullet": "",
    "Rating": 4.6,
    "MSRP": "$39.99",
    "Sale Price": "$34.99",
    "Availability": "",
    "Shipping Option": ""
  },
  {
    "Page": 1,
    "Rank": 9,
    "Paid": "",
    "Badge": "",
    "Brand": "Olay",
    "Product ID": "B075WZQ8RF",
    "Title": "Olay Regenerist Whip  1.7 Ounce",
    "Usage Title": "",
    "Usage Description": "",
    "Usage Bullet": "",
    "Rating": 4.6,
    "MSRP": "",
    "Sale Price": "$22.01",
    "Availability": "Only 1 left in stock - order soon.",
    "Shipping Option": ""
  },
  {
    "Page": 1,
    "Rank": 10,
    "Paid": "",
    "Badge": "Prime",
    "Brand": "Olay",
    "Product ID": "B09CDXHG9N",
    "Title": "Olay Regenerist Vitamin C + Peptide 24 Brightening Face Moisturizer for Brighter Skin  Lightweight anti-aging cream for dark spots  Includes Olay Whip Travel size for dry",
    "Usage Title": "",
    "Usage Description": "",
    "Usage Bullet": "",
    "Rating": 4.6,
    "MSRP": "",
    "Sale Price": "$34.99",
    "Availability": "",
    "Shipping Option": ""
  },
  {
    "Page": 1,
    "Rank": 11,
    "Paid": "",
    "Badge": "Prime",
    "Brand": "Face",
    "Product ID": "B001G7PMYA",
    "Title": "Face Moisturizer by Olay Complete Lotion All Day Daily Facial Moisturizing Lotion SPF 15 for Normal Skin and Hydration  Oil-Free Non-Greasy  6 Fl Oz (Pack of 2)",
    "Usage Title": "",
    "Usage Description": "",
    "Usage Bullet": "",
    "Rating": 4.7,
    "MSRP": "",
    "Sale Price": "$23.88",
    "Availability": "",
    "Shipping Option": ""
  },
  {
    "Page": 1,
    "Rank": 12,
    "Paid": "",
    "Badge": "Prime",
    "Brand": "Olay",
    "Product ID": "B01M4R7CC5",
    "Title": "Olay Regenerist Night Recovery Cream Face Moisturizer  Fragrance Free  1.7 oz",
    "Usage Title": "",
    "Usage Description": "",
    "Usage Bullet": "",
    "Rating": 4.6,
    "MSRP": "$27.49",
    "Sale Price": "$25.87",
    "Availability": "",
    "Shipping Option": ""
  },
  {
    "Page": 1,
    "Rank": 13,
    "Paid": "",
    "Badge": "Prime",
    "Brand": "Olay",
    "Product ID": "B01M4R7D9A",
    "Title": "Olay Total Effects 7 in 1 Night  1.7 oz",
    "Usage Title": "",
    "Usage Description": "",
    "Usage Bullet": "",
    "Rating": 4.5,
    "MSRP": "",
    "Sale Price": "$18.00",
    "Availability": "",
    "Shipping Option": ""
  },
  {
    "Page": 1,
    "Rank": 14,
    "Paid": "",
    "Badge": "Prime",
    "Brand": "Olay",
    "Product ID": "B07XQBY5QQ",
    "Title": "Olay Regenerist Retinol Moisturizer  Retinol 24 Night Face Cream with Niacinamide  Anti-Wrinkle Fragrance-Free 1.7 oz  Includes Olay Whip Travel Size for Dry Skin",
    "Usage Title": "",
    "Usage Description": "",
    "Usage Bullet": "",
    "Rating": 4.6,
    "MSRP": "",
    "Sale Price": "$34.99",
    "Availability": "",
    "Shipping Option": ""
  },
  {
    "Page": 1,
    "Rank": 15,
    "Paid": "",
    "Badge": "",
    "Brand": "Olay",
    "Product ID": "B08147WH37",
    "Title": "Olay Regenerist Retinol 24 Night Moisturizer cream  Fragrance free  1.7 Fl Oz",
    "Usage Title": "",
    "Usage Description": "",
    "Usage Bullet": "",
    "Rating": 4.6,
    "MSRP": "$29.88",
    "Sale Price": "$20.99",
    "Availability": "Only 3 left in stock - order soon.",
    "Shipping Option": ""
  },
  {
    "Page": 1,
    "Rank": 16,
    "Paid": "",
    "Badge": "Prime",
    "Brand": "Olay",
    "Product ID": "B007M81A6Q",
    "Title": "Olay Total Effects Tone Correcting Face Moisturizer with Sunscreen SPF 15  Light to Medium 1.7 Ounces",
    "Usage Title": "",
    "Usage Description": "",
    "Usage Bullet": "",
    "Rating": 4.5,
    "MSRP": "$24.97",
    "Sale Price": "$19.99",
    "Availability": "",
    "Shipping Option": ""
  },
  {
    "Page": 1,
    "Rank": 17,
    "Paid": "",
    "Badge": "Prime",
    "Brand": "Face",
    "Product ID": "B01N0R25XI",
    "Title": "Face Wash by Olay Regenerist Advanced Anti-Aging Pore Scrub Cleanser (5.0 Oz) and Micro-Sculpting Face Moisturizer Cream (1.7 Oz) Skin Care Duo Pack  Total 6.7 Ounces Packaging may Vary",
    "Usage Title": "",
    "Usage Description": "",
    "Usage Bullet": "",
    "Rating": 4.7,
    "MSRP": "",
    "Sale Price": "$27.47",
    "Availability": "",
    "Shipping Option": ""
  },
  {
    "Page": 1,
    "Rank": 18,
    "Paid": "",
    "Badge": "Prime",
    "Brand": "Eye",
    "Product ID": "B000F65JSC",
    "Title": "Eye Cream by Olay Total Effects 7-in-one Anti-Aging Transforming Eye Cream 0.5 oz Packaging may Vary",
    "Usage Title": "",
    "Usage Description": "",
    "Usage Bullet": "",
    "Rating": 4.4,
    "MSRP": "",
    "Sale Price": "$23.48",
    "Availability": "",
    "Shipping Option": ""
  }
];


const data1 = [
  { name: 'Olay', value: 82 },
  { name: 'Face', value: 45 },
  { name: 'Facial', value: 30 },
  { name: 'Eye', value: 25 },
  { name: 'Dark', value: 15 },
];

const data2 = [
  { name: 'Olay', value: 70 },
  { name: 'Face', value: 20 },
  { name: 'Facial', value: 10 },
];

const data3 = [
  { name: 'Olay', value: 80 },
  { name: 'Face', value: 20 },
];

const getBarColor = (name) => {
  switch (name) {
    case 'Olay':
      return '#9b0fab';
    case 'Face':
      return '#a38ac8';
    case 'Facial':
      return '#87cefa';
    case 'Eye':
      return '#ffbaed';
    default:
      return '#ccc';
  }
};

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <Box p="2" bg="white" boxShadow="md" borderRadius="md">
//         <Text color="gray.700" fontWeight="bold">
//           {payload[0].payload.name}
//         </Text>
//         <Text color="gray.500">{`${payload[0].value} (%)`}</Text>
//       </Box>
//     );
//   }
//   return null;
// };

const DigitalShelfAnalysisTable = () => {
  return (
    <>
      <Box mt={5} p={5} boxShadow="lg" bg="white" borderRadius="md" maxW="1200px">
      <Flex mt={100} ml={50} justifyContent="space-between" alignItems="center">
          <Select placeholder="Select a Retailer" maxWidth="200px">
            <option value="amazon">Amazon</option>
            <option value="walmart">Walmart</option>
            <option value="shopee">Shopee</option>
            <option value="lazada">Lazada</option>
          </Select>
          <Select placeholder="Select an Option" maxWidth="300px">
            <option value="keyword">Keyword or Phrase</option>
            <option value="search_url">Search URL (from Retailer website)</option>
          </Select>
          <Input placeholder="Type here" maxWidth="300px" />
          <Button
            bgGradient="linear(to-r, blue.500, blue.200)"
            borderRadius="md"
            color="white"
          >
            Submit
          </Button>
        </Flex>
      </Box>
      
      <Box mt={5} p={5} boxShadow="lg" bg="white" borderRadius="md" maxW="1200px">
        <VStack mt={5} spacing={5}>
          <HStack spacing={5} w="100%">
            <Box flex="1" height="60%">
            <VStack alignItems="center">
            <Text fontSize="lg" fontWeight="bold">Page 1</Text>
            <Text fontSize="sm" color="gray.500">Share of Search</Text>
          </VStack>
              <Box
                height="100%"
                borderWidth="1px"
                borderColor="gray.300"
                borderRadius="md"
                overflow="hidden"
              >
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart layout="vertical" data={data1}>
                  <Bar dataKey="value" radius={[0, 5, 5, 0]} activeDot={false}>
                      {data1.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={getBarColor(entry.name)}
                        />
                      ))}
                    </Bar>
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    {/* <Tooltip content={<CustomTooltip />} /> */}
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Box>
            <Box flex="1" height="60%">
            <VStack alignItems="center">
              <Text fontSize="lg" fontWeight="bold">Top 10</Text>
              <Text fontSize="sm" color="gray.500">Share of Search</Text>
            </VStack>
              <Box
                height="100%"
                borderWidth="1px"
                borderColor="gray.300"
                borderRadius="md"
                overflow="hidden"
              >
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart layout="vertical" data={data2}>
                  <Bar dataKey="value" radius={[0, 5, 5, 0]} activeDot={false}>
                      {data2.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={getBarColor(entry.name)}
                        />
                      ))}
                    </Bar>
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    {/* <CustomTooltip /> */}
                  </BarChart>
                  </ResponsiveContainer>
              </Box>
            </Box>
            <Box flex="1" height="60%">
            <VStack alignItems="center">
            <Text fontSize="lg" fontWeight="bold">Top 5</Text>
            <Text fontSize="sm" color="gray.500">Share of Search</Text>
          </VStack>
              <Box
                height="100%"
                borderWidth="1px"
                borderColor="gray.300"
                borderRadius="md"
                overflow="hidden"
              >
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart layout="vertical" data={data3}>
                  <Bar dataKey="value" radius={[0, 5, 5, 0]} activeDot={false}>
                      {data3.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={getBarColor(entry.name)}
                        />
                      ))}
                    </Bar>
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    {/* <CustomTooltip /> */}
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Box>
          </HStack>
        </VStack>
      </Box>
      
<Box
  mt={10}
  mb={10}
  p={2}
  boxShadow="lg"
  bg="white"
  borderRadius="md"
  maxW="1200px"
  overflowX="auto"
>
  <Table variant="striped" colorScheme="gray" fontSize="sm">
    <Thead>
      <Tr>
        <Th width="50px">Page</Th>
        <Th width="50px">Rank</Th>
        <Th width="50px">Paid</Th>
        <Th width="150px">Badge</Th>
        <Th width="100px">Brand</Th>
        <Th width="120px">Product ID</Th>
        <Th width="350px">Title</Th>
        <Th width="70px">Rating</Th>
        {/* <Th width="90px">MSRP</Th> */}
        <Th width="90px">Sale Price</Th>
        {/* <Th width="110px">Availability</Th>
        <Th width="150px">Shipping Option</Th> */}
      </Tr>
    </Thead>
    <Tbody>
      {data.map((item, index) => (
        <Tr key={index}>
          <Td width="50px">{item.Page}</Td>
          <Td width="50px">{item.Rank}</Td>
          <Td width="50px">{item.Paid}</Td>
          <Td width="150px">{item.Badge}</Td>
          <Td width="100px">{item.Brand}</Td>
          <Td width="120px">{item.Product_ID}</Td>
          <Td width="350px">{item.Title}</Td>
          <Td width="70px">{item.Rating}</Td>
          {/* <Td width="90px">{item.MSRP}</Td> */}
          <Td width="90px">{item.Sale_Price}</Td>
          {/* <Td width="110px">{item.Availability}</Td>
          <Td width="150px">{item.Shipping_Option}</Td> */}
        </Tr>
      ))}
    </Tbody>
  </Table>
</Box>




    </>
  );
};
  
export default DigitalShelfAnalysisTable;
