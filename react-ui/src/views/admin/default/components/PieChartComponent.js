import React, { useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { Tabs, TabList, Tab } from '@chakra-ui/react';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartComponent = ({ data1, data2 }) => {
  const [selectedData, setSelectedData] = useState(data1);

  const handleTabChange = (index) => {
    const newData = index === 0 ? data1 : data2;
    setSelectedData(newData);
  };

  return (
    <div>
      <Tabs onChange={handleTabChange} variant="enclosed" colorScheme="teal">
        <TabList>
          <Tab>Data 1</Tab>
          <Tab>Data 2</Tab>
        </TabList>
      </Tabs>
      <PieChart width={400} height={400}>
        <Pie
          data={selectedData}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {selectedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
