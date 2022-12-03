import React from 'react';
import SmallBox from '../../../../ui/SmallBox';
import { Carousel } from '@mantine/carousel';

const ElectronicItem = ({ imgProps }) => {
  const { img, bgColor, height } = imgProps;
  return (
    <Carousel.Slide>
      <SmallBox img={img} bgColor={bgColor} height={height} />
    </Carousel.Slide>
  );
};

export default ElectronicItem;
