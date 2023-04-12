import {
  Avatar,  Box,  Flex,  FormLabel,  Icon,  Select,  SimpleGrid,  useColorModeValue,  Table,  Thead,  Tbody,  Tr,  Th,  Td,} from "@chakra-ui/react";
import MiniStatistics from "components/card/MiniStatistics";
import ClickableMiniStatistics from 'components/card/ClickableMiniStatistics';
import IconBox from "components/icons/IconBox";
import { LineChart, Line, Label, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

import {
  MdAddTask,  MdAttachMoney,  MdBarChart,  MdFileCopy,} from "react-icons/md";
import React, { useState, useEffect, useRef  } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import PaidCampaignData from '../variables/Paid_Campaign.json';
import 'react-date-range/dist/styles.css'; // main styles
import 'react-date-range/dist/theme/default.css'; // theme styles
import { DateRangePicker } from 'react-date-range';
import 'bootstrap/dist/css/bootstrap.min.css';
import { usePopper } from 'react-popper';



const ECommerceCampaignReport = () => {
  // Find the minimum and maximum dates in the JSON data
  const minDate = new Date(Math.min.apply(null, PaidCampaignData.map(d => new Date(d.Date))));
  const maxDate = new Date(Math.max.apply(null, PaidCampaignData.map(d => new Date(d.Date))));
  const [startDate, setStartDate] = useState(minDate);
  const [endDate, setEndDate] = useState(maxDate);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    filterData();
  }, [startDate, endDate]);

  const filterData = () => {
    const filtered = PaidCampaignData.filter(
      (d) => new Date(d.Date) >= startDate && new Date(d.Date) <= endDate
    );
    setFilteredData(filtered);
    console.log(filtered);
  };
  const handleDateRangeChange = (item) => {
    setStartDate(item.selection.startDate);
    setEndDate(item.selection.endDate);
  };
 // Popover logic
 const [showPopover, setShowPopover] = useState(false);
 const buttonRef = useRef(null);
 const popoverRef = useRef(null);
 const { styles, attributes } = usePopper(buttonRef.current, popoverRef.current, {
   placement: 'bottom-start',
   modifiers: [{ name: 'offset', options: { offset: [0, 10] } }],
 });

 const togglePopover = () => {
   setShowPopover(!showPopover);
 };

 const formatDate = (date) => {
   return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
 };
  
  const [selectedMetrics, setSelectedMetrics] = useState([]);
  const formatNumber = (value) => {
    return new Intl.NumberFormat().format(value);
  };
  
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'VND' }).format(value);
  };
  
  const calculateMetrics = (metric) => {
    return filteredData.reduce((total, item) => total + parseFloat(item[metric]), 0);
  };
  
  const calculatePercentage = (numerator, denominator) => {
  if (denominator === 0) {
    return 0;
  }
  return (numerator / denominator) * 100;
  };

  const CTR = calculatePercentage(calculateMetrics('Clicks'), calculateMetrics('Impression'));
  const CR = calculatePercentage(calculateMetrics('Conversions'), calculateMetrics('Clicks'));
  const ROAS = calculateMetrics('Expense') === 0 ? 0 : calculateMetrics('GMV') / calculateMetrics('Expense');   
  

  {/*Chart Format */}
  const handleMetricSelection = (metricName) => {
    if (selectedMetrics.includes(metricName)) {
      setSelectedMetrics(selectedMetrics.filter((metric) => metric !== metricName));
    } else if (selectedMetrics.length < 4) {
      setSelectedMetrics([...selectedMetrics, metricName]);
    }
  };
  const formatChartData = () => {
    const aggregatedData = {};
  
    filteredData.forEach((entry) => {
      const date = new Date(entry.Date).toLocaleDateString();
  
      if (!aggregatedData[date]) {
        aggregatedData[date] = {
          Date: date,
          Impression: 0,
          Clicks: 0,
          Conversions: 0,
          "Items Sold": 0,
          GMV: 0,
          Expense: 0,
          // Add other metrics if needed
        };
      }
  
      aggregatedData[date].Impression += parseFloat(entry.Impression);
      aggregatedData[date].Clicks += parseFloat(entry.Clicks);
      aggregatedData[date].Conversions += parseFloat(entry.Conversions);
      aggregatedData[date] ["Items Sold"] += parseFloat(entry["Items Sold"]);
      aggregatedData[date].GMV += parseFloat(entry.GMV);
      aggregatedData[date].Expense += parseFloat(entry.Expense);
      // Add aggregation logic for other metrics if needed
    });
  
    return Object.values(aggregatedData);
  };

  

  {/* CustomTooltip */}
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label" style={{ fontSize: "12px", color: {brandColor} }}>
            {`Date: ${label}`}
          </p>
          {selectedMetrics.map((metric) => (
            <p
              key={metric}
              className="metric"
              style={{ fontSize: "12px", color: metricColor[metric] }}
            >
              {`${metric}: ${formatTooltipValue(payload, metric)}`}
            </p>
          ))}
        </div>
      );
    }
  
    return null;
  };
  
  const formatTooltipValue = (payload, metricName) => {
    const metric = payload.find((p) => p.name === metricName);
  
    if (!metric) {
      return "";
    }
  
    if (metricName === "Date") {
      const date = new Date(metric.value);
      const day = date.getDate();
      const month = date.toLocaleString("default", { month: "short" });
      return `${day} ${month}`;
    }
  
    if (metricName === "Expense" || metricName === "GMV") {
      return formatCurrency(metric.value);
    }
  
    if (metricName === "CTR" || metricName === "CR") {
      return `${(metric.value * 100).toFixed(2)}%`;
    }
  
    return formatNumber(metric.value);
  };
  
  
  const metricColor = {
    Impression: "#ff0000",
    Clicks: "#8884d8",
    Conversions: "#82ca9d",
    "Items Sold": "#a67f00",
    GMV: "#e91e63",
    Expense: "#f44336",
    
  };
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const [selectedValue, setSelectedValue] = useState('GMV');
  const calculateExpensesByType = (valueType) => {
    const types = {};
    filteredData.forEach((entry) => {
      if (!types[entry.Type]) {
        types[entry.Type] = parseFloat(entry[valueType]);
      } else {
        types[entry.Type] += parseFloat(entry[valueType]);
      }
    });
    return Object.keys(types).map((type) => ({ name: type, value: types[type] }));
  };
  

  {/*colour Code*/}
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );

  return (
    <div>
      {/* Date range filter */}
      <div className="date-range-filter" style={{ float: 'right', position: 'relative' }}>
        {/* Date picker toggle button */}
        <button
          type="button"
          className="btn btn-primary"
          ref={buttonRef}
          onClick={togglePopover}
          style={{ zIndex: 1000 }}
        >
          {formatDate(startDate)} - {formatDate(endDate)}
        </button>

        {/* Date picker popover */}
        {showPopover && (
          <div
            ref={popoverRef}
            style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              zIndex: 1000,
              width: 'fit-content',
            }}
          >
            <div
              className="card"
              style={{
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
              }}
            >
              <div className="card-body">
                <DateRangePicker
                  ranges={[
                    {
                      startDate: startDate,
                      endDate: endDate,
                      key: 'selection',
                    },
                  ]}
                  onChange={handleDateRangeChange}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Simple-grid section */}
      
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }} gap="20px" mb="px">
          <ClickableMiniStatistics
          onClick={() => handleMetricSelection('Impression')}
            startContent={
          <IconBox
            w="56px"
            h="56px"
            bg= {boxBg}
            icon={<Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />}
            />
            }
            name="Impressions"
            value={formatNumber(calculateMetrics('Impression'))}
            bgColor='#ff0000'
          />
          <ClickableMiniStatistics
          onClick={() => handleMetricSelection('Clicks')}
          startContent={
          <IconBox
            w="56px"
            h="56px"
            bg={boxBg}
            icon={<Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />}
          />
          }
          name="Clicks"
          value={calculateMetrics('Clicks')}
          />
          <ClickableMiniStatistics
          onClick={() => handleMetricSelection('Conversions')}
          startContent={
          <IconBox
            w="56px"
            h="56px"
            bg={boxBg}
            icon={<Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />}
          />
          }
          name="Conversions"
          value={formatNumber(calculateMetrics('Conversions'))}
          />
          <ClickableMiniStatistics
          onClick={() => handleMetricSelection('Items Sold')}
          startContent={
          <IconBox
            w="56px"
            h="56px"
            bg={boxBg}
            icon={<Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />}
          />
          }
          name="Items Sold"
          value={formatNumber(calculateMetrics('Items Sold'))}
          />
          <ClickableMiniStatistics
          onClick={() => handleMetricSelection('GMV')}
          startContent={
          <IconBox
            w="56px"
            h="56px"
            bg={boxBg}
            icon={<Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />}
          />
          }
          name="GMV"
          value={formatCurrency(calculateMetrics('GMV'))}
          />
          <ClickableMiniStatistics
          onClick={() => handleMetricSelection('Expense')}
          startContent={
          <IconBox
            w="56px"
            h="56px"
            bg={boxBg}
            icon={<Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />}
          />
          }
          name="Expense"
          value={formatCurrency(calculateMetrics('Expense'))}
          />
          <ClickableMiniStatistics
          
          startContent={
          <IconBox
            w="56px"
            h="56px"
            
            
          />
          }
          name="CTR(%)"
          value={CTR.toFixed(2)}
          />
          <MiniStatistics
          startContent={
          <IconBox
            w="56px"
            h="56px"
            bg={boxBg}
            icon={<Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />}
          />
          }
          name="CR"
          value={CR.toFixed(2)}
          />
          <MiniStatistics
          startContent={
          <IconBox
            w="40px"
            h="40px"
            bg={boxBg}
            icon={<Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />}
          />
          }
          name="ROAS"
          value={ROAS.toFixed(2)}
          />
        </SimpleGrid>
      </Box>

      {/*...linechart*/}

      <Box width="100%" minW='75%' pt="40px" height="400px"backgroundColor="white"  borderRadius="xl" >
        <ResponsiveContainer>
        <LineChart
          data={formatChartData()}
          margin={{ top: 5, right: 15, left: -10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="Date"
            axisLine={false}
            tickLine={false}
            style={{
            fontSize: "12px",
            fontWeight: "500",
                color: "#A3AED0"
              }}
              tickFormatter={(tick) => {
                const date = new Date(tick);
                const day = date.getDate();
                const month = date.toLocaleString("default", { month: "short" });
                return `${day} ${month}`;
              }}
            />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={false}
            scale="auto" 
            />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          {selectedMetrics.includes('Impression') && (
            <Line
              type="monotone"
              
              dataKey="Impression"
              stroke="#ff0000"
              strokeWidth={3}
              dot={{ r: 2, fill: "white", stroke: "#ff0000", strokeWidth: 2 }}
              activeDot={{ r: 8 }}
              name="Impression"
              legendType="line"
              
            >
            <Label
             value="Impression"
             position="top"
             dy={-10}
             dx={-5}
             style={{ fontSize: "12px", border: "none" }}
            />
            </Line>
          )}
          {selectedMetrics.includes('Clicks') && (
            <Line
              type="monotone"
              dataKey="Clicks"
              stroke="#8884d8"
              strokeWidth={3}
              dot={{ r: 2, fill: "white", stroke: "#ff0000", strokeWidth: 2 }}
              activeDot={{ r: 8 }}
            />
          )}
          {selectedMetrics.includes('Conversions') && (
            <Line
              type="monotone"
              dataKey="Conversions"
              stroke="#8884d8"
              strokeWidth={3}
              dot={{ r: 2, fill: "white", stroke: "#ff0000", strokeWidth: 2 }}
              activeDot={{ r: 8 }}
            />
          )}
          {selectedMetrics.includes('Items Sold') && (
            <Line
              type="monotone"
              dataKey="Items Sold"
              stroke="#8884d8"
              strokeWidth={3}
              dot={{ r: 2, fill: "white", stroke: "#ff0000", strokeWidth: 2 }}
              activeDot={{ r: 8 }}
            />
          )}
          {selectedMetrics.includes('GMV') && (
            <Line
              type="monotone"
              dataKey="GMV"
              stroke="#8884d8"
              strokeWidth={3}
              dot={{ r: 2, fill: "white", stroke: "#ff0000", strokeWidth: 2 }}
              activeDot={{ r: 8 }}
            />
          )}
          {selectedMetrics.includes('Expense') && (
            <Line
              type="monotone"
              dataKey="Expense"
              stroke="#8884d8"
              strokeWidth={3}
              dot={{ r: 2, fill: "white", stroke: "#ff0000", strokeWidth: 2 }}
              activeDot={{ r: 8 }}
            />
          )}
          {/* Add other lines for the remaining metrics */}
          </LineChart>
        </ResponsiveContainer>
        <Tooltip />
        </Box>

      
      <Box width="100%" minW='75%' pt="40px" height="400px"backgroundColor="white"  borderRadius="xl" >
      <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={calculateExpensesByType ()}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {calculateExpensesByType ().map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend
              verticalAlign="top"
              height={36}
              onClick={(e) => setSelectedValue(e.payload.value)}
              payload={[
                {
                  value: 'GMV',
                  type: 'square',
                  color: selectedValue === 'GMV' ? COLORS[0] : '#ddd',
                },
                {
                  value: 'Expense',
                  type: 'square',
                  color: selectedValue === 'Expense' ? COLORS[1] : '#ddd',
                },
              ]}
            />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </div>
    );
  };

export default ECommerceCampaignReport;

