import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import Usa from "assets/img/dashboards/usa.png";
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PaidCampaignData from '../variables/Paid_Campaign.json';


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
  
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const MiniStatistics = ({ startContent, name, value }) => (
    <Box display="flex" alignItems="center">
      {startContent}
      <Box>
        <h4>{name}</h4>
        <p>{value}</p>
      </Box>
    </Box>
  );

  return (
    <div>
      {/* Date range filter */}
      <div className="date-range-filter" style={{ float: 'right' }}>
        <div className="date-picker-container">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
        </div>

      </div>

      {/* Simple-grid section */}
      
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }} gap="20px" mb="20px">
          <MiniStatistics
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
          name="Clicks"
          value={calculateMetrics('Clicks')}
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
          name="Conversions"
          value={formatNumber(calculateMetrics('Conversions'))}
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
          name="Items Sold"
          value={formatNumber(calculateMetrics('Items Sold'))}
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
          name="GMV"
          value={formatCurrency(calculateMetrics('GMV'))}
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
          name="Expense"
          value={formatCurrency(calculateMetrics('Expense'))}
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
            w="56px"
            h="56px"
            bg={boxBg}
            icon={<Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />}
          />
          }
          name="ROAS"
          value={ROAS.toFixed(2)}
          />
        </SimpleGrid>
      </Box>
    </div>
    );
  };

export default ECommerceCampaignReport;

