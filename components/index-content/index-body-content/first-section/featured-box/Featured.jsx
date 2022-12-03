import React from 'react';
import { Carousel } from '@mantine/carousel';
import SlideItem from './SlideItem';
import { createStyles } from '@mantine/core';

const slides = [
  {
    image:
      'https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_530%2Cw_875/v1569493276/amazon_de.jpg',
    title: 'Amazon.de',
    category: 'Ecommerce',
    bgColor: 'white',
  },
  {
    image:
      'https://www.bitrefill.com/content/cn/b_rgb%3A000000%2Cc_pad%2Ch_530%2Cw_875/v1559413733/steam.jpg',
    title: 'Steam EUR',
    category: 'Games',
    bgColor: 'black',
    featured: true,
  },
  {
    image:
      'https://www.bitrefill.com/content/cn/b_rgb%3Af86601%2Cc_pad%2Ch_530%2Cw_875/v1647458456/lieferando-de.jpg',
    title: 'Lieferando',
    category: 'Food',
    bgColor: '#F86601',
  },
  {
    image:
      'https://www.bitrefill.com/content/cn/b_rgb%3A0058a3%2Cc_pad%2Ch_530%2Cw_875/v1553602580/ikea.jpg',
    title: 'IKEA',
    category: 'Retail',
    bgColor: '#0058A3',
    featured: true,
  },
  {
    image:
      'https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_530%2Cw_875/v1565862841/media.jpg',
    title: 'MediaMarkt',
    category: 'Retail',
    bgColor: 'white',
  },
  {
    image:
      'https://www.bitrefill.com/content/cn/b_rgb%3Ad22027%2Cc_pad%2Ch_530%2Cw_875/v1582706773/rewe.jpg',
    title: 'Rewe',
    category: 'Food',
    bgColor: '#D22027',
    featured: true,
  },
];

const useStyles = createStyles((theme) => ({
  controls: {
    top: '50%',
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
  control: {
    backgroundColor: `${theme.colors.dark[9]}`,
    borderColor: `${theme.colors.gray[9]}`,
    color: 'white',
  },
}));
const Featured = () => {
  const { classes } = useStyles();
  return (
    <div>
      <Carousel
        slideSize="60%"
        align="start"
        slideGap="xl"
        controlsOffset="xs"
        controlSize={40}
        loop
        classNames={{ control: classes.control, controls: classes.controls }}
        breakpoints={[
          { maxWidth: 'xs', slideSize: '60%', slideGap: 15 },
          { maxWidth: 'sm', slideSize: '60%', slideGap: 15 },
        ]}
      >
        {slides.map((slide, i) => (
          <Carousel.Slide key={i}>
            <SlideItem slide={slide} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default Featured;
