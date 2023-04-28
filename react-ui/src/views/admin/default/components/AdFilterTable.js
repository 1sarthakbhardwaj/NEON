import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const AdFilterTable = ({ filteredData }) => {
  const adTypes = ['Discovery Ads', 'Product Search Ad', 'Shop Search Ad'];

  const formatNumber = (value) => {
    return new Intl.NumberFormat().format(value);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(value);
  };

  const calculateAggregate = (adType, metric) => {
    const total = filteredData
      .filter((data) => data['Ads Type'] === adType)
      .reduce((total, item) => total + parseFloat(item[metric]), 0);

    return total;
  };

  return (
    <Box mt={4} p={4} boxShadow="lg" bg="white" borderRadius="md" maxW="900px">
      <Table variant="striped" colorScheme="gray" fontSize="sm"  >
      <Thead>
        <Tr>
          <Th minW="80px" maxW="80px" fontSize="10px">Ads Types</Th>
          <Th minW="100px" maxW="150px" fontSize="10px">Impressions</Th>
          <Th minW="60px" maxW="90px" fontSize="10px">Clicks</Th>
          <Th minW="100px" maxW="100px" fontSize="10px">Orders</Th>
          <Th minW="20px" maxW="20px" fontSize="10px">GMV</Th>
          <Th minW="100px" maxW="100px" fontSize="10px">Expense</Th>
          <Th minW="20px" maxW="90px" fontSize="10px">CTR</Th>
          <Th minW="40px" maxW="90px" fontSize="10px">CPC</Th>
          <Th minW="40px" maxW="90px" fontSize="10px">ROAS</Th>
        </Tr>
      </Thead>

        <Tbody>
          {adTypes.map((adType) => {
            const impressions = calculateAggregate(adType, 'Impression');
            const clicks = calculateAggregate(adType, 'Clicks');
            const conversions = calculateAggregate(adType, 'Conversions');
            const gmv = calculateAggregate(adType, 'GMV');
            const expense = calculateAggregate(adType, 'Expense');

            const ctr = ((clicks / impressions) * 100).toFixed(2);
            const cpc = formatCurrency(expense / clicks);
            const roas = (gmv / expense).toFixed(2);

            return (
              <Tr key={adType}>
                <Td>{adType}</Td>
                <Td>{formatNumber(impressions)}</Td>
                <Td>{formatNumber(clicks)}</Td>
                <Td>{formatNumber(conversions)}</Td>
                <Td>{formatCurrency(gmv)}</Td>
                <Td>{formatCurrency(expense)}</Td>
                <Td>{ctr}%</Td>
                <Td>{cpc}</Td>
                <Td>{roas}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};

export default AdFilterTable;
