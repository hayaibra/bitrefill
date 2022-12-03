import { Grid, Group, Rating, Stack, Text } from '@mantine/core';
import React from 'react';
import SmallBox from '../../../ui/SmallBox';

const ProductItem = ({ product }) => {
  const { img, bgColor, rate, feature, name, price, height } = product;
  return (
    <Grid.Col md={4} lg={4} sm={4} xs={6} span={6}>
      <Stack spacing="xs">
        <SmallBox img={img} bgColor={bgColor} height={height} />
        <Stack spacing="none">
          <Group position="apart">
            <Text fz="xl" weight={600} color="white">
              {name}
            </Text>
            {rate && (
              <Group spacing="none">
                <Text fz="lg" fw={700} color="white">
                  {rate}
                </Text>
                <Rating defaultValue={2} color="red.0" count={1} />
              </Group>
            )}
          </Group>
          <Text fz="md">{price}</Text>
          {feature && (
            <Text fz="sm" color="yellow.5">
              Featured
            </Text>
          )}
        </Stack>
      </Stack>
    </Grid.Col>
  );
};
export default ProductItem;
