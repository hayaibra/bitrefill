import { Stack } from '@mantine/core';
import React from 'react';
import Details from './details/Details';
import FirstIndex from './first-section/FirstIndex';
import GiftWork from './gift-work/GiftWork';
import Questions from './questions/Questions';
import IndexTopProducts from './top-product/IndexTopProducts';

const IndexBodyContent = () => {
  return (
    <Stack spacing="xl" justify="flex-start">
      <FirstIndex />
      <IndexTopProducts />
      <GiftWork />
      <Questions />
      <Details />
    </Stack>
  );
};

export default IndexBodyContent;
