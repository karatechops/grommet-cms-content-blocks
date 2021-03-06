import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';

export default function BlockPageHeader({ title, controls, fixed }) {
  return (
    <Header
      fixed={fixed}
      style={{ maxHeight: 50, width: '100% !important' }}
      size="small"
      colorIndex="light-2"
      direction="row"
      justify="between"
      responsive={false}
      align="center"
      pad={{ vertical: 'small', horizontal: 'medium' }}
    >
      <Heading tag="h4" strong margin="none">
        {title}
      </Heading>
      <Box direction="row" pad={{ between: 'small' }}>
        {controls}
      </Box>
    </Header>
  );
}

BlockPageHeader.propTypes = {
  title: PropTypes.string,
  controls: PropTypes.node,
  fixed: PropTypes.bool.isRequired,
};

BlockPageHeader.defaultProps = {
  fixed: true,
};
