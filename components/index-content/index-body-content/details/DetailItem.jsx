import { Grid, Text, Box } from '@mantine/core';
import React from 'react';
import Image from 'next/image';

const DetailItem = ({ detail }) => {
  const { img, title, width, height } = detail;
  return (
    <Grid.Col md={3} sm={6} xs={6} span={6}>
      <Box sx={{ textAlign: 'center' }}>
        <Image src={img} width={width} height={height} alt="" />
        <Text fz="md" color="white">
          {title}
        </Text>
      </Box>
    </Grid.Col>
  );
};

export default DetailItem;
