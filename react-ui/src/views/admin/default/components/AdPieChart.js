import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import { Box, Select, VStack, Text } from '@chakra-ui/react';

const COLORS = ['#4ECDC4', '#F3A183', '#ECCC58', '#6699CC'];

const AdPieChart = ({ filteredData }) => {
  const adTypes = ['Discovery Ads', 'Product Search Ad', 'Shop Search Ad'];
  const metrics = ['Impression', 'Clicks', 'Conversions', 'GMV', 'Expense'];

  const [selectedMetric, setSelectedMetric] = React.useState(metrics[0]);

  const calculateAggregate = (adType, metric) => {
    return filteredData
      .filter((data) => data['Ads Type'] === adType)
      .reduce((total, item) => total + parseFloat(item[metric]), 0);
  };

  const chartData = adTypes.map((adType) => ({
    name: adType,
    value: calculateAggregate(adType, selectedMetric),
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, value } = payload[0].payload;
      return (
        <Box p={2} bg="white" borderRadius="md" boxShadow="lg">
          <Text fontWeight="bold">{`${name}`}</Text>
          <Text>{`${selectedMetric}: ${value}`}</Text>
        </Box>
      );
    }
  
    return null;
  };
  

  return (
    <VStack mt={8} spacing={4} alignItems="center">
      <Select
        width="50%"
        value={selectedMetric}
        onChange={(e) => setSelectedMetric(e.target.value)}
        bg="white"
        borderRadius="md"
        focusBorderColor="blue.500"
      >
        {metrics.map((metric) => (
          <option key={metric} value={metric}>
            {metric}
          </option>
        ))}
      </Select>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            fill="#8884d8"
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </VStack>
  );
};

export default AdPieChart;
