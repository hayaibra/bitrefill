import {
  Box,
} from '@mantine/core';
import React from 'react';
import IndexBodyContent from './index-body-content/IndexBodyContent';
import NavComponent from './NavComponent';


const IndexContent = () => {
  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        [theme.fn.smallerThan('md')]: { flexDirection: 'column' },
      })}
    >
      <NavComponent />
      <IndexBodyContent />
    </Box>
  );
};

export default IndexContent;
