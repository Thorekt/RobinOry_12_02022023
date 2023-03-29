import React from 'react';
import PropTypes from 'prop-types';

/*
 * This is the legend for the ActivityGraph.
 *
 * @param {string} value The value of the legend.
 */
function ActivityLegend(value) {
  return (
    <span
      style={{
        color: '#74798C',
        lineHeight: '24px',
        paddingLeft: '12px',
        paddingRight: '32px',
      }}
    >
      {value}
    </span>
  );
}

ActivityLegend.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ActivityLegend;
