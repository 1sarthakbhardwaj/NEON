import React from 'react';
import MiniStatistics from './MiniStatistics';
import { getStrokeColors } from '../../views/admin/default/components/PaidCampaignUtils';

const strokeColors = getStrokeColors();

const ClickableMiniStatistics = ({ onClick, style, isActive, metric, ...restProps }) => {
  const borderColor = isActive ? strokeColors[metric] : 'transparent';

  const activeStyle = isActive
    ? {
        position: 'relative',
      }
    : {};

  return (
    <div onClick={onClick} style={{ cursor: 'pointer', ...style, ...activeStyle }}>
      <MiniStatistics {...restProps} />
      {isActive && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '3.5%', // Adjust the left offset
            right: '3.5%', // Adjust the right offset
            height: '6px',
            borderRadius: '9px 9px 0 0',
            backgroundColor: borderColor,
          }}
        ></div>
      )}
    </div>
  );
};

export default ClickableMiniStatistics;
