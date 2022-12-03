import React from 'react';
import { Carousel } from '@mantine/carousel';
import GamingItemContent from './GamingItemContent';

const GamingItem = ({ game }) => {
  return (
    <Carousel.Slide>
      {game.map((item, i) => (
        <GamingItemContent key={i} item={item} />
      ))}
    </Carousel.Slide>
  );
};

export default GamingItem;
