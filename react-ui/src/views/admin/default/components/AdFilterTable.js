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
    <Box mt={60} p={4} boxShadow="lg" bg="white" borderRadius="md">
      <Table variant="striped" colorScheme="gray" fontSize="sm">
        <Thead>
        <Tr>
            <Th className="adTypeColumn">Ads Types</Th>
            <Th className="valueColumn">Impressions</Th>
            <Th className="valueColumn">Clicks</Th>
            <Th className="valueColumn">Conversions</Th>
            <Th className="valueColumn">GMV</Th>
            <Th className="valueColumn">Expense</Th>
            <Th className="ctrColumn">CTR</Th>
            <Th className="valueColumn">CPC</Th>
            <Th className="valueColumn">ROAS</Th>
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
