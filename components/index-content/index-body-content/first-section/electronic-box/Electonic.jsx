import { createStyles, Grid, Group, Stack, Title } from '@mantine/core';
import React from 'react';
import ElectronicItem from './ElectronicItem';
import { Carousel } from '@mantine/carousel';

const imgs = [
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3A000000%2Cc_pad%2Ch_530%2Cw_875/v1580993558/saturn.jpg',
    bgColor: 'black',
    height: '158px',
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_530%2Cw_875/v1561131423/otto.jpg',
    bgColor: 'white',
    height: '158px',
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3A194e82%2Cc_pad%2Ch_530%2Cw_875/v1579683740/cyberport.jpg',
    bgColor: '#194e82',
    height: '158px',
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_530%2Cw_875/v1647289011/conrad-de.jpg',
    bgColor: 'white',
    height: '158px',
  },
];

const useStyle = createStyles((theme) => ({
  controls: {
    display: 'none',
  },
}));
const Electonic = () => {
  const { classes } = useStyle();
  return (
    <Stack>
      <Group position="apart">
        <Title sx={{ fontSize: '24px' }} color="white" fw={600}>
          Electronics
        </Title>
        <Title
          variant="link"
          py="xs"
          px="0"
          size="h4"
          fw={600}
          underline
          sx={{
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
        classNames={{ controls: classes.controls }}
        breakpoints={[{ maxWidth: 'xs', slideSize: '45%', slideGap: 10 }]}
      >
        {imgs.map((img, i) => (
          <ElectronicItem key={i} imgProps={img} />
        ))}
      </Carousel>
    </Stack>
  );
};

export default Electonic;
