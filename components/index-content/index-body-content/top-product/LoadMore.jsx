import { Button, Progress, Stack, Text } from '@mantine/core';
import React from 'react';

const LoadMore = () => {
  return (
    <Stack spacing="xl" align="center">
      <Stack spacing="xs" align="center">
        <Text fz="md" color="white">
          Showing 30 out of 90
        </Text>
        <Progress color="red" value={30} sx={{ width: '200px' }} size="sm" />
      </Stack>
      <Button variant="filled" color="red" radius="xl" size='md'>
        Load more
      </Button>
    </Stack>
  );
};

export default LoadMore;
