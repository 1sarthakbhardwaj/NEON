import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { Tabs, TabList, Tab } from '@chakra-ui/react';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <p
          style={{
            margin: 0,
            color: '#333',
            fontWeight: 'bold',
            borderBottom: '1px solid #eee',
            paddingBottom: '5px',
          }}
        >
          {label}
        </p>
        {payload.map((entry, index) => (
          <div
            key={`item-${index}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: entry.color,
                marginRight: '5px',
              }}
            ></span>
            <span
              style={{
                color: entry.color,
                fontWeight: 'bold',
                marginRight: '5px',
              }}
            >
              {entry.name}:
            </span>
            <span
              style={{
                color: '#333',
                fontWeight: '400',
                marginLeft: 'auto',
              }}
            >
              {entry.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return null;
};

const PieChartComponent = ({ data1, data2 }) => {
  const [selectedData, setSelectedData] = useState(data1);

  // Update the state when data1 prop changes
  useEffect(() => {
    setSelectedData(data1);
  }, [data1]);

  const handleTabChange = (index) => {
    const newData = index === 0 ? data1 : data2;
    setSelectedData(newData);
  };

  return (
    <div>
      <Tabs onChange={handleTabChange} variant="enclosed" colorScheme="teal">
        <TabList>
          <Tab>GMV</Tab>
          <Tab>CTR</Tab>
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
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;