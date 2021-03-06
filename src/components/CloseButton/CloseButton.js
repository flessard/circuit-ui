import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { withTheme } from 'emotion-theming';
import { hideVisually } from 'polished';

import { themePropType } from '../../util/shared-prop-types';
import { svgKilo } from '../../styles/style-helpers';
import SvgButton from '../SvgButton';
import Icon from './close-icon.svg';

const className = ({ theme }) => css`
  label: close-button;
  ${svgKilo({ theme })};
`;

const labelBaseStyles = () => css`
  ${hideVisually()};
`;

// Important for accessibility
const ButtonLabel = styled('span')`
  ${labelBaseStyles};
`;

/**
 * A generic close button.
 */
const CloseButton = ({ theme, label, ...props }) => (
  <SvgButton className={className({ theme })} {...props}>
    <Icon />
    <ButtonLabel>{label}</ButtonLabel>
  </SvgButton>
);

CloseButton.propTypes = {
  /**
   * Text label for screen readers. Important for accessibility.
   */
  label: PropTypes.string,
  theme: themePropType.isRequired
};

CloseButton.defaultProps = {
  label: 'close'
};

/**
 * @component
 */
export default withTheme(CloseButton);
