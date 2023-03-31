import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/graphs/customs/AverageSessionsTooltip.css';

/*
 * This is the tooltip for the ActivityGraph.
 *
 * @param {boolean} active If the tooltip is active.
 * @param {array} payload The payload of the tooltip.
 * @returns {JSX.Element} The ActivityTooltip component.
 * @returns {null} If the tooltip is not active.
 * @returns {null} If the payload is not an array.
 * @returns {null} If the payload is an empty array.
 */
function AverageSessionsTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className='average-sessions-custom-tooltip'>
        <p className='label'>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
}

AverageSessionsTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default AverageSessionsTooltip;
