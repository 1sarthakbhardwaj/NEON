import React from 'react';
import MiniStatistics from './MiniStatistics';

const ClickableMiniStatistics = ({ onClick, ...restProps }) => {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer' }}>
      <MiniStatistics {...restProps} />
    </div>
  );
};

export default ClickableMiniStatistics;
