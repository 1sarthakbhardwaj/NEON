import React from 'react';
import { Tooltip, Line } from 'recharts';

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

  export const getMetricSettings = (metric) => {
    const settings = {
      Impression: { yAxisId: "left", stepSize: 10000 },
      Clicks: { yAxisId: "left", stepSize: 100 },
      Conversions: { yAxisId: "right", stepSize: 5 },
      "Items Sold": { yAxisId: "right", stepSize: 5 },
      GMV: { yAxisId: "right", stepSize: 200000 },
      Expense: { yAxisId: "right", stepSize: 100000 },
      CR: { yAxisId: "right", stepSize: 1 },
      ROAS: { yAxisId: "right", stepSize: 1 },
      CTR: { yAxisId: "left", stepSize: 0.5 },
    };
  
    return settings[metric];
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

  export const renderLineComponents = (selectedMetrics) => {
    const lineComponents = selectedMetrics.map((metric) => {
      const metricSettings = {
        Impression: { stroke: "#ff0000", dotStroke: "#ff0000" },
        Clicks: { stroke: "#8884d8", dotStroke: "#ff0000" },
        Conversions: { stroke: "#8884d8", dotStroke: "#ff0000" },
        "Items Sold": { stroke: "#8884d8", dotStroke: "#ff0000" },
        GMV: { stroke: "#8884d8", dotStroke: "#ff0000" },
        Expense: { stroke: "#8884d8", dotStroke: "#ff0000" },
        CTR: { stroke: "#82ca9d", dotStroke: "#82ca9d" },
        CR: { stroke: "#a67f00", dotStroke: "#a67f00" },
        ROAS: { stroke: "#e91e63", dotStroke: "#e91e63" },
      };
  
      const { stroke, dotStroke } = metricSettings[metric];
      const { yAxisId, stepSize } = getMetricSettings(metric);
  
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
    const COLORS = ['#8884d8', '#82ca9d'];
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