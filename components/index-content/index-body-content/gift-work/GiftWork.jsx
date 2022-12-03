import { Grid, Stack, Title } from '@mantine/core';
import React from 'react';
import GiftItem from './GiftItem';

const giftCards = [
  {
    img: require('../../../../public/svg1.png'),
    title: 'Enter the amount',
    text: 'Select or type the amount you want the card to have.',
    width: '184',
    height: '48',
  },
  {
    img: require('../../../../public/svg2.png'),
    title: 'Pay with your preferred coin',
    text: 'Your payment is confirmed the same minute in most cases.',
    width: '153',
    height: '56',
  },
  {
    img: require('../../../../public/svg3.png'),
    title: "That's it, ready to use it!",
    text: 'Redeem your card at your chosen retailer according to their instructions.',
    width: '86',
    height: '63',
  },
];

const GiftWork = () => {
  return (
    <Stack spacing="xl">
      <Title size="h1" color="white" sx={{ fontSize: '40px' }} fw={600}>
        How gift cards work
      </Title>
      <Grid gutter="xl">
        {giftCards.map((card, i) => (
          <GiftItem key={i} card={card} />
        ))}
      </Grid>
    </Stack>
  );
};

export default GiftWork;
