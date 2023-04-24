import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const AdFilterTable = ({ filteredData }) => {
  const adTypes = ['Discovery Ads', 'Product Search Ad', 'Shop Search Ad'];

  const calculateAggregate = (adType, metric) => {
    return filteredData
      .filter((data) => data['Ads Type'] === adType)
      .reduce((total, item) => total + parseFloat(item[metric]), 0);
  };

  return (
    <Box mt={60} p={4} boxShadow="lg" bg="white" borderRadius="md">
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>Ads Types</Th>
            <Th>Impressions</Th>
            <Th>Clicks</Th>
            <Th>Conversions</Th>
            <Th>GMV</Th>
            <Th>Expense</Th>
          </Tr>
        </Thead>
        <Tbody>
          {adTypes.map((adType) => (
            <Tr key={adType}>
              <Td>{adType}</Td>
              <Td>{calculateAggregate(adType, 'Impression')}</Td>
              <Td>{calculateAggregate(adType, 'Clicks')}</Td>
              <Td>{calculateAggregate(adType, 'Conversions')}</Td>
              <Td>{calculateAggregate(adType, 'GMV')}</Td>
              <Td>{calculateAggregate(adType, 'Expense')}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default AdFilterTable;
