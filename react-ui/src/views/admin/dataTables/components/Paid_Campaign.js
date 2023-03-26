import React from 'react';
import jsonData from '../variables/Paid_Campaign.json';

const columns = [
    { key: 'productId', label: 'Product ID' },
    
    { key: 'Impression', label: 'Impressions' },
    { key: 'Clicks', label: 'Clicks' },
    { key: 'Conversions', label: 'Conversions' },
    { key: 'ItemsSold', label: 'Items Sold' },
    { key: 'GMV', label: 'GMV' },
    { key: 'Expense', label: 'Expense' },
    { key: 'CTR', label: 'CTR' },
    { key: 'CR', label: 'CR' },
    { key: 'ROAS', label: 'ROAS' },
    // ... Add more columns as needed
];

const aggregateData = (data) => {
    const resultMap = new Map();
  
    data.forEach((row) => {
      const productId = row.productId;
  
      if (!resultMap.has(productId)) {
        resultMap.set(productId, {
          ...row,
          productName: row['Product Name/Ad Name'],
        });
      } else {
        const existingProduct = resultMap.get(productId);
  
        existingProduct.Impression += Number(row.Impression);
        existingProduct.Clicks += Number(row.Clicks);
        existingProduct.Conversions += Number(row.Conversions);
        existingProduct.ItemsSold += Number(row.ItemsSold);
        existingProduct.GMV += Number(row.GMV);
        existingProduct.Expense += Number(row.Expense);
      }
    });
    const resultArray = Array.from(resultMap.values());

  // Calculate the new CTR, CR, and ROAS columns
  resultArray.forEach((row) => {
    row.CTR = parseFloat(((row.Clicks / row.Impression) * 100).toFixed(2));
    row.CR = parseFloat(((row.Conversions / row.Clicks) * 100).toFixed(2));
    row.ROAS = parseFloat((row.GMV / row.Expense).toFixed(2));
  });

  return resultArray; 
};

const PaidCampaignTable = () => {
  const aggregatedData = aggregateData(jsonData);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {aggregatedData.map((row, index) => (
            <tr key={row.ProductID}>
              {columns.map((column) => (
                <td key={`${column.key}-${index}`}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaidCampaignTable;
