import { Badge, Box,  Image } from '@mantine/core';
import React from 'react';

const SmallBox = ({ img, bgColor, featured,height }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '2px',
        border: '1px solid #303633',
        height: `${height}`,
        padding: '10px',
        backgroundColor: `${bgColor}`,
        cursor: 'pointer',
        transition: '0.1s',
        position: `${featured ? 'relative' : ''}`,

        '&:hover': {
          transform: 'translate(0, -2px)',
        },
      }}
    >
      {featured && (
        <Badge
          size="sm"
          color="dark"
          variant="filled"
          sx={{ position: 'absolute', left: '10px', top: '10px', zIndex: 1 }}
        >
          {' '}
          Featured
        </Badge>
      )}
      <Box>
        <Image src={img} alt="" />
      </Box>
    </Box>
  );
};

export default SmallBox;
