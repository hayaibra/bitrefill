import { Stack } from '@mantine/core';
import React from 'react';
import LoadMore from './LoadMore';
import TitleSection from './TitleSection';
import TopProducts from './TopProducts';

const IndexTopProducts = () => {
  return (
    <Stack spacing="xl">
      <TitleSection />
      <TopProducts />
      <LoadMore />
    </Stack>
  );
};

export default IndexTopProducts;
