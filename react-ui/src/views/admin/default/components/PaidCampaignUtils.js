import React from 'react';
import { Tooltip } from 'recharts';

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