import { Grid, Group } from '@mantine/core';
import React from 'react';
import DetailItem from './DetailItem';

const details = [
  {
    img: require('../../../../public/svg4.png'),
    title: 'Instant digital delivery',
    width: '28',
    height: '28',
  },
  {
    img: require('../../../../public/svg5.png'),
    title: 'Live Bankless',
    width: '32',
    height: '32',
  },
  {
    img: require('../../../../public/svg6.png'),
    title: 'ISave on exchange fees',
    width: '28',
    height: '24',
  },
  {
    img: require('../../../../public/svg7.png'),
    title: 'Min 1% cashback on all cards',
    width: '28',
    height: '28',
  },
];

const Details = () => {
  return (
    <Grid gutter="xl">
      {details.map((detail, i) => (
        <DetailItem key={i} detail={detail} />
      ))}
    </Grid>
  );
};

export default Details;
