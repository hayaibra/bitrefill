import { Stack } from '@mantine/core';
import React from 'react';
import Featured from './featured-box/Featured';
import Electonic from './electronic-box/Electonic';
import Travels from './travel-box/Travels';
import Gaming from './gaming-box/Gaming';

const FirstIndex = () => {
  return (
    <Stack spacing="xl" sx={{ marginBottom: '40px' }}>
      <Featured />
      <Electonic />
      <Travels />
      <Gaming />
    </Stack>
  );
};

export default FirstIndex;
