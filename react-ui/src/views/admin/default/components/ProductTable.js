import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const ProductTable = ({ data }) => {
  const aggregateData = data.reduce((acc, item) => {
    if (!acc[item['Product Name/Ad Name']]) {
      acc[item['Product Name/Ad Name']] = {
        Impressions: 0,
        Clicks: 0,
        Conversions: 0,
        GMV: 0,
        Expense: 0,
      };
    }
    acc[item['Product Name/Ad Name']].Impressions += item.Impression;
    acc[item['Product Name/Ad Name']].Clicks += item.Clicks;
    acc[item['Product Name/Ad Name']].Conversions += item.Conversions;
    acc[item['Product Name/Ad Name']].GMV += item.GMV;
    acc[item['Product Name/Ad Name']].Expense += item.Expense;

    return acc;
  }, {});

  return (
    <Box mt={10} p={4} boxShadow="lg" bg="white" borderRadius="md">
    <Table variant="striped" mt="500px" colorScheme="gray">
        <Text
        fontSize="xl"
        fontWeight="bold"
        textAlign="left"
        mt="-200px"
        mb="100px"
        ml={600}
      >
        Performance by Product Name
      </Text>
      <Thead>
        <Tr>
          <Th>Product Name/ Ad Name</Th>
          <Th>Impressions</Th>
          <Th>Clicks</Th>
          <Th>Conversions</Th>
          <Th>GMV</Th>
          <Th>Expense</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Object.entries(aggregateData).map(([productName, metrics]) => (
          <Tr key={productName}>
            <Td>{productName}</Td>
            <Td>{metrics.Impressions}</Td>
            <Td>{metrics.Clicks}</Td>
            <Td>{metrics.Conversions}</Td>
            <Td>{metrics.GMV}</Td>
            <Td>{metrics.Expense}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </Box>
  );
};

export default ProductTable;
