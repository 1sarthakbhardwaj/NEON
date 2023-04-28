import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const DigitalShelfAnalysisTable = () => {
  return (
    <Box mt={10} p={2} boxShadow="lg" bg="white" borderRadius="md">
      <Table variant="striped" colorScheme="gray" fontSize="sm">
        <Thead>
          <Tr>
            <Th>Keyword</Th>
            <Th>Keyword Type</Th>
            <Th isNumeric>Frequency T Rank</Th>
            <Th isNumeric>Share of Sponsored Products</Th>
            <Th isNumeric>Share of Sponsored Brands</Th>
            <Th isNumeric>Organic Share of Top 3</Th>
            <Th isNumeric>Organic Share of Top 10</Th>
            <Th isNumeric>Organic S 1</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>cereal</Td>
            <Td>GENERIC</Td>
            <Td isNumeric>5</Td>
            <Td isNumeric>18.2%</Td>
            <Td isNumeric>28.07%</Td>
            <Td isNumeric>19%</Td>
            <Td isNumeric>28%</Td>
            <Td isNumeric>35%</Td>
          </Tr>
          <Tr>
            <Td>bars</Td>
            <Td>GENERIC</Td>
            <Td isNumeric>10</Td>
            <Td isNumeric>94.52%</Td>
            <Td isNumeric>100%</Td>
            <Td isNumeric>90%</Td>
            <Td isNumeric>79%</Td>
            <Td isNumeric>63%</Td>
          </Tr>
          <Tr>
            <Td>breakfast</Td>
            <Td>GENERIC</Td>
            <Td isNumeric>11</Td>
            <Td isNumeric>14.1%</Td>
            <Td isNumeric>21.05%</Td>
            <Td isNumeric>17%</Td>
            <Td isNumeric>31%</Td>
            <Td isNumeric>21%</Td>
          </Tr>
          <Tr>
            <Td>granola bars</Td>
            <Td>GENERIC</Td>
            <Td isNumeric>29</Td>
            <Td isNumeric>9.11%</Td>
            <Td isNumeric>24.56%</Td>
            <Td isNumeric>0%</Td>
            <Td isNumeric>11%</Td>
            <Td isNumeric>21%</Td>
          </Tr>
          <Tr>
            <Td>protein bars</Td>
            <Td>GENERIC</Td>
            <Td isNumeric>35</Td>
            <Td isNumeric>16.67%</Td>
            <Td isNumeric>21.93%</Td>
            <Td isNumeric>19%</Td>
            <Td isNumeric>28%</Td>
            <Td isNumeric>37%</Td>
          </Tr>
          <Tr>
            <Td>granola</Td>
            <Td>GENERIC</Td>
            <Td isNumeric>64</Td>
            <Td isNumeric>37.24%</Td>
            <Td isNumeric>68.42%</Td>
            <Td isNumeric>19%</Td>
            <Td isNumeric>22%</Td>
            <Td isNumeric>40%</Td>
          </Tr>
          <Tr>
            <Td>cookies prime pantry</Td>
            <Td>GENERIC</Td>
            <Td isNumeric>196</Td>
            <Td isNumeric>60.72%</Td>
            <Td isNumeric>100%</Td>
            <Td isNumeric>67%</Td>
            <Td isNumeric>48%</Td>
            <Td isNumeric>39%</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default DigitalShelfAnalysisTable;
