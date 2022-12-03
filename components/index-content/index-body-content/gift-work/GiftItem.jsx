import { Box, Card, Grid, Stack, Text, Title } from '@mantine/core';
import React from 'react';
import Image from 'next/image';

const GiftItem = ({ card }) => {
  const { img, width, height, title, text } = card;
  return (
    <Grid.Col md={4} lg={4}>
      <Stack>
        <Card
          shadow="sm"
          px="xl"
          radius="md"
          withBorder
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '160px',
          }}
        >
          <Card.Section>
            <Image width={width} height={height} src={img} alt="" />
          </Card.Section>
        </Card>
        <Title fw={500} sx={{ fontSize: '20px' }} color="white">
          {title}
        </Title>
        <Text fz="md">{text}</Text>
      </Stack>
    </Grid.Col>
  );
};

export default GiftItem;
