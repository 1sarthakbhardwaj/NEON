import React from 'react';
import MiniStatistics from './MiniStatistics';

const ClickableMiniStatistics = ({ onClick, style, ...restProps }) => {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer', ...style }}>
      <MiniStatistics {...restProps} />
    </div>
  );
};

export default ClickableMiniStatistics;
