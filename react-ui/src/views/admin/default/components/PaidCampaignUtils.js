import React from 'react';
import { Tooltip, Line } from 'recharts';
import { Box, Icon } from '@chakra-ui/react';
import { MdBarChart } from 'react-icons/md';

export const generateIconBox = (boxBg, brandColor) => (
  <Box
    w="56px"
    h="56px"
    bg={boxBg}
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Icon as={MdBarChart} color={brandColor} w="28px" h="28px" />
  </Box>
);


export const formatChartData = (filteredData) => {
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
          CTR: 0,
          CR: 0,
          ROAS: 0,
        };
      }
  
      aggregatedData[date].Impression += parseFloat(entry.Impression);
      aggregatedData[date].Clicks += parseFloat(entry.Clicks);
      aggregatedData[date].Conversions += parseFloat(entry.Conversions);
      aggregatedData[date]["Items Sold"] += parseFloat(entry["Items Sold"]);
      aggregatedData[date].GMV += parseFloat(entry.GMV);
      aggregatedData[date].Expense += parseFloat(entry.Expense);
  
      // Calculate the new metrics
      aggregatedData[date].CTR =
        aggregatedData[date].Impression === 0
          ? 0
          : (aggregatedData[date].Clicks / aggregatedData[date].Impression) * 100;
      aggregatedData[date].CR =
        aggregatedData[date].Clicks === 0
          ? 0
          : (aggregatedData[date].Conversions / aggregatedData[date].Clicks) * 100;
      aggregatedData[date].ROAS =
        aggregatedData[date].Expense === 0
          ? 0
          : aggregatedData[date].GMV / aggregatedData[date].Expense;
    });
  
    return Object.values(aggregatedData);
  };

 export const getSettings = (metric, selectedMetrics = []) => {
  const baseSettings = {
    Impression: { color: '#1a237e', stepSize: 10000 },
    Clicks: { color: '#1b5e20', stepSize: 1000 },
    Conversions: { color: '#b71c1c', stepSize: 100 },
    'Items Sold': { color: '#EA580C', stepSize: 100 },
    GMV: { color: '#006064', stepSize: 1000000 },
    Expense: { color: '#9333EA', stepSize: 1000000 },
    CTR: { color: '#0D9488', stepSize: 1 },
    CR: { color: '#3F3B82', stepSize: 1 },
    ROAS: { color: '#8B5F33', stepSize: 1 },
  };
  

  const metricSettings = baseSettings[metric] || {};
  
  // Update yAxisId assignment logic
  let yAxisId;
  if (selectedMetrics.length === 0 || selectedMetrics[0] === metric) {
    yAxisId = 'left';
  } else if (selectedMetrics.length === 1 || selectedMetrics[1] === metric) {
    yAxisId = 'right';
  }
  
  return { ...metricSettings, yAxisId };
};


  
  
export const CustomTooltip = ({
    active,
    payload,
    label,
    selectedMetrics,
    brandColor,
    metricColor,
    formatTooltipValue,
  }) => {
    const formatTooltipValueLocal = (payload, metricName) => {
        const metric = payload.find((p) => p.name === metricName);
    
        if (!metric) {
          return '-';
        }
    
        return formatTooltipValue(metric.value);
      };

    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
<       p className="label" style={{ fontSize: "12px", color: brandColor }}>
          {`Date: ${new Date(label).toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: 'numeric'})}`}

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

  export const renderLineComponents = (selectedMetrics) => {
    const lineComponents = selectedMetrics.map((metric) => {
      const metricSettings = {
        Impression: { stroke: "#1a237e", dotStroke: "#1a237e" },
        Clicks: { stroke: "#1b5e20", dotStroke: "#1b5e20" },
        Conversions: { stroke: "#b71c1c", dotStroke: "#b71c1c" },
        "Items Sold": { stroke: "#EA580C", dotStroke: "#EA580C" },
        GMV: { stroke: "#006064", dotStroke: "#006064" },
        Expense: { stroke: "#9333EA", dotStroke: "#9333EA" },
        CTR: { stroke: "#0D9488", dotStroke: "#0D9488" },
        CR: { stroke: "#3F3B82", dotStroke: "#3F3B82" },
        ROAS: { stroke: "#8B5F33", dotStroke: "#8B5F33" },
      };
      
      
  
      const { stroke, dotStroke } = metricSettings[metric];
      const { yAxisId, stepSize } = getSettings(metric, selectedMetrics);
  
      return (
        <Line
          key={metric}
          yAxisId={yAxisId}
          type="monotone"
          dataKey={metric}
          stroke={stroke}
          strokeWidth={3}
          dot={{ r: 2, fill: "white", stroke: dotStroke, strokeWidth: 2 }}
          activeDot={{ r: 8 }}
        />
      );
    });
  
    return lineComponents;
  };
  
  
  export const createLegendPayload = (selectedValue) => {
    const COLORS = ['#006064', '#3F3B82'];
    const payload = [
      {
        value: "GMV",
        type: "square",
        color: selectedValue === "GMV" ? COLORS[0] : "#ddd",
      },
      {
        value: "Expense",
        type: "square",
        color: selectedValue === "Expense" ? COLORS[1] : "#ddd",
      },
    ];
  
    return payload;
  };

  export const getStrokeColors = () => {
    const metrics = [
      "Impression",
      "Clicks",
      "Conversions",
      "Items Sold",
      "GMV",
      "Expense",
      "CTR",
      "CR",
      "ROAS",
    ];
  
    const strokeColors = {};
  
    metrics.forEach((metric) => {
      const settings = renderLineComponents([metric]);
      strokeColors[metric] = settings[0].props.stroke;
    });
  
    return strokeColors;
  };
  
  