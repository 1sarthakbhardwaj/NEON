import React, { useState } from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Flex, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Text } from "@chakra-ui/react";


const ProductTable = ({ data }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const formatNumber = (value) => {
    return new Intl.NumberFormat().format(value);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(value);
  };

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

  

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const displayData = Object.entries(aggregateData).slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  return (
    <Box mt={10} p={2} boxShadow="lg" bg="white" borderRadius="md">
      {/* <Text
        fontSize="xl"
        fontWeight="bold"
        textAlign="left"
        mb="10px"
      >
        Performance by Product Name
      </Text> */}
      <Table variant="striped" mt="50px" colorScheme="gray" border="1px" borderColor="gray.200" borderRadius="md" fontSize="sm">
        <Thead>
          <Tr>
            <Th>Product Name/ Ad Name</Th>
            <Th>Impressions</Th>
            <Th>Clicks</Th>
            <Th>Conversions</Th>
            <Th>GMV</Th>
            <Th>Expense</Th>
            <Th>CTR</Th>
            <Th>CPC</Th>
            <Th>ROAS</Th>
          </Tr>
        </Thead>
        <Tbody>
          {displayData.map(([productName, metrics]) => {
            const ctr = ((metrics.Clicks / metrics.Impressions) * 100).toFixed(2);
            const cpc = formatCurrency(metrics.Expense / metrics.Clicks);
            const roas = (metrics.GMV / metrics.Expense).toFixed(2);

            return (
              <Tr key={productName}>
                <Td>{productName}</Td>
                <Td>{formatNumber(metrics.Impressions)}</Td>
                <Td>{formatNumber(metrics.Clicks)}</Td>
                <Td>{formatNumber(metrics.Conversions)}</Td>
                <Td>{formatCurrency(metrics.GMV)}</Td>
                <Td>{formatCurrency(metrics.Expense)}</Td>
                <Td>{ctr}%</Td>
                <Td>{cpc}</Td>
                <Td>{roas}</Td>
              </Tr>
            )})}
            </Tbody>
          </Table>
          <Flex justifyContent="flex-end" mt={4}>
           <IconButton
          onClick={() => handleChangePage(page - 1)}
          isDisabled={page === 0}
          icon={<ChevronLeftIcon />}
          mr={2}
            />
            <IconButton
          onClick={() => handleChangePage(page + 1)}
          isDisabled={displayData.length < rowsPerPage}
          icon={<ChevronRightIcon />}
           />
             </Flex>
             </Box>
  );
};
            export default ProductTable;
            