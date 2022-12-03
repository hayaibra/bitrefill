import { Grid, Stack, Text, Title } from '@mantine/core';
import React from 'react';

const FooterBoxes = ({ box }) => {
  const { title, items } = box;
  return (
    <Grid.Col md={6} lg={3} sm={3} xs={6}>
      <Stack spacing="sm">
        <Text fz="md" color="white">
          {title}
        </Text>
        <Stack spacing="xs">
          {items.map((item, i) => (
            <Title
              key={i}
              variant="link"
              color="gray.5"
              fw={400}
              sx={{ fontSize: '16px', cursor: 'pointer' }}
            >
              {item}
            </Title>
          ))}
        </Stack>
      </Stack>
    </Grid.Col>
  );
};

export default FooterBoxes;
