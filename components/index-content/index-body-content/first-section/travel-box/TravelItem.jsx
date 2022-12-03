import React from 'react';
import { Carousel } from '@mantine/carousel';
import SmallBox from '../../../../ui/SmallBox';

const TravelItem = ({ slide }) => {
  const { img, bgColor, featured, imgHeight, imgWidth, height } = slide;
  return (
    <Carousel.Slide>
      <SmallBox
        img={img}
        bgColor={bgColor}
        featured={featured}
        imgHeight={imgHeight}
        imgWidth={imgWidth}
        height={height}
      />
    </Carousel.Slide>
  );
};

export default TravelItem;
