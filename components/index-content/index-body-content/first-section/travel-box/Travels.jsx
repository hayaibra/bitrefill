import { createStyles, Group, Stack, Text, Title } from '@mantine/core';
import React from 'react';
import { Carousel } from '@mantine/carousel';
import TravelItem from './TravelItem';

const imgSlides = [
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Aec008c%2Cc_pad%2Ch_530%2Cw_875/v1558970450/lastminute_com.jpg',
    bgColor: '#EC008C',
    imgWidth: '163',
    imgHeight: '99',
    height: '158px',
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Ad32e2e%2Cc_pad%2Ch_530%2Cw_875/v1555429587/hotels_com.jpg',
    bgColor: '#D32E2E',
    featured: true,
    imgWidth: '163',
    imgHeight: '99',
    height: '158px',
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Ae31860%2Cc_pad%2Ch_530%2Cw_875/v1632327350/airbnb_latest.jpg',
    bgColor: '#E31860',
    featured: true,
    imgWidth: '163',
    imgHeight: '99',
    height: '158px',
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3A152149%2Cc_pad%2Ch_530%2Cw_875/v1612448179/flightgift_new.jpg',
    bgColor: '#152149',
    imgWidth: '163',
    imgHeight: '99',
    height: '158px',
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_530%2Cw_875/v1605066432/galeria.jpg',
    bgColor: 'white',
    imgWidth: '163',
    imgHeight: '99',
    height: '158px',
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3A1d5576%2Cc_pad%2Ch_530%2Cw_875/v1658235529/share-now-germany.jpg',
    bgColor: '#1D5576',
    imgWidth: '163',
    imgHeight: '99',
    height: '158px',
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Aff9701%2Cc_pad%2Ch_530%2Cw_875/v1647289005/weg-de.jpg',
    bgColor: '#FF9701',
    imgWidth: '163',
    imgHeight: '99',
    height: '158px',
  },
];

const useStyles = createStyles((theme) => ({
  controls: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
  control: {
    backgroundColor: '#1F2421',
    borderColor: `${theme.colors.gray[9]}`,
    color: 'white',
  },
}));

const Travels = () => {
  const { classes } = useStyles();

  return (
    <Stack>
      <Group position="apart">
        <Stack spacing="none">
          <Title sx={{ fontSize: '24px' }} color="white" fw={600}>
            For Your Travel Needs
          </Title>
          <Text fz="md" color="gray.6">
            Be back never.
          </Text>
        </Stack>

        <Title
          variant="link"
          py="xs"
          px="0"
          size="h4"
          fw={600}
          underline
          sx={{
            cursor: 'pointer',
            color: 'white',
            '&:hover': {
              color: 'blue',
            },
          }}
        >
          See all
        </Title>
      </Group>
      <Carousel
        slideSize="25%"
        align="start"
        slideGap="xl"
        controlsOffset="xs"
        controlSize={35}
        slidesToScroll={4}
        loop
        classNames={{ control: classes.control, controls: classes.controls }}
        breakpoints={[
          { maxWidth: 'xs', slideSize: '45%', slideGap: 10 },
          { maxWidth: 'md', slideSize: '25%' },
          { maxWidth: 'lg', slideSize: '25%' },
          { maxWidth: 'sm', slideSize: '40%', slideGap: 15 },
        ]}
      >
        {imgSlides.map((slide, i) => (
          <TravelItem key={i} slide={slide} />
        ))}
      </Carousel>
    </Stack>
  );
};

export default Travels;
