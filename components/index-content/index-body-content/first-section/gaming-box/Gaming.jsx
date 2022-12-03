import { createStyles, Group, Stack, Title } from '@mantine/core';
import React from 'react';
import { Carousel } from '@mantine/carousel';
import GamingItem from './GamingItem';

const games = [
  [
    {
      img: 'https://www.bitrefill.com/content/cn/b_rgb%3A000000%2Cc_pad%2Ch_100%2Cw_100/v1557317680/steam-icon.jpg',
      title: 'Steam EUR',
      price: '€10 - €100',
      bgColor: 'white',
    },
    {
      img: 'https://www.bitrefill.com/content/cn/b_rgb%3A074695%2Cc_pad%2Ch_100%2Cw_100/v1557504239/psn-icon.jpg',
      title: 'PlayStation Store',
      price: '€5- €120',
      bgColor: '#074695',
    },
  ],
  [
    {
      img: 'https://www.bitrefill.com/content/cn/b_rgb%3A107c0f%2Cc_pad%2Ch_100%2Cw_100/v1557503805/xbox-icon.jpg',
      title: 'Xbox',
      price: '€25- €100',
      bgColor: '#107C0F',
    },
    {
      img: 'https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_100%2Cw_100/v1600067899/twitch_usa.jpg',
      title: 'Twitch',
      price: '€15- €150',
      bgColor: 'white',
    },
  ],
  [
    {
      img: 'https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_100%2Cw_100/v1556129417/nintendo.jpg',
      title: 'Nintendo eShop',
      price: '€15- €50',
      bgColor: 'white',
    },
    {
      img: 'https://www.bitrefill.com/content/cn/b_rgb%3A000000%2Cc_pad%2Ch_100%2Cw_100/v1585251159/dazn.jpg',
      title: 'DAZN',
      price: '€30- €275',
      bgColor: 'black',
    },
  ],
  [
    {
      img: 'https://www.bitrefill.com/content/cn/b_rgb%3A000000%2Cc_pad%2Ch_100%2Cw_100/v1605679230/pubg_mobile-icon.jpg',
      title: 'PUBG Mobile UC',
      price: '60 UC - 40500 UC',
      bgColor: 'black',
    },
    {
      img: 'https://www.bitrefill.com/content/cn/b_rgb%3A000000%2Cc_pad%2Ch_100%2Cw_100/v1608050462/roblox-icon.jpg',
      title: 'Roblox USD',
      price: '$10 - $200',
      bgColor: 'black',
    },
  ],
  [
    {
      img: 'https://www.bitrefill.com/content/cn/b_rgb%3A117c0f%2Cc_pad%2Ch_100%2Cw_100/v1557503805/xbox-icon.jpg',
      title: 'Xbox Game Pass Ultimate',
      price: '1 Month - 3 Months',
      bgColor: '#117C0F',
    },
    {
      img: 'https://www.bitrefill.com/content/cn/b_rgb%3A074695%2Cc_pad%2Ch_100%2Cw_100/v1539610111/playstation.jpg',
      title: 'PlayStation Plus',
      price: '12 Months',
      bgColor: '#074695',
    },
  ],
  [
    {
      img: 'https://www.bitrefill.com/content/cn/b_rgb%3Ae72211%2Cc_pad%2Ch_100%2Cw_100/v1604947582/nintendoswitch.jpg',
      title: 'Nintendo Switch Online',
      price: '€7.99 - €19.99',
      bgColor: '#E72211',
    },
    {
      img: 'https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_100%2Cw_100/v1604961065/freefire.jpg',
      title: 'Free Fire Diamonds',
      price: '100 Diamonds - 2200 Diamonds',
      bgColor: 'white',
    },
  ],
  [
    {
      img: 'https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_100%2Cw_100/v1615825759/cherry_credits.jpg',
      title: 'Cherry Credits',
      price: '$3.5 - $70',
      bgColor: 'white',
    },
    {
      img: 'https://www.bitrefill.com/content/cn/b_rgb%3A000000%2Cc_pad%2Ch_100%2Cw_100/v1567456941/jagex.jpg',
      title: 'Roblox USD',
      price: '$10 - $200',
      bgColor: 'black',
    },
  ],
  [
    {
      img: 'https://www.bitrefill.com/content/cn/b_rgb%3A252525%2Cc_pad%2Ch_100%2Cw_100/v1536085030/minecraft.jpg',
      title: 'Minecraft Minecoins',
      price: '1720 Coins - 3500 Coins',
      bgColor: '#252525',
    },
    {
      img: 'https://www.bitrefill.com/content/cn/b_rgb%3A107c0f%2Cc_pad%2Ch_100%2Cw_100/v1557503805/xbox-icon.jpg',
      title: 'Xbox Live Gold',
      price: '3 Months - 12 Months',
      bgColor: '#107C0F',
    },
  ],
];

const useStyles = createStyles((theme) => ({
  controls: {
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

const Gaming = () => {
  const { classes } = useStyles();
  return (
    <Stack spacing="none">
      <Group position="apart">
        <Title sx={{ fontSize: '24px' }} color="white" fw={600}>
          Gaming Cards We Love
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
        slideSize="33.333333%"
        align="start"
        slideGap="xl"
        controlsOffset="none"
        controlSize={40}
        slidesToScroll={3}
        loop
        p="8px 0"
        classNames={{ controls: classes.controls, control: classes.control }}
        breakpoints={[
          { maxWidth: 'xs', slideSize: '70%', slideGap: 10 },
          { maxWidth: 'sm', slideSize: '50%', slideGap: 15 },
        ]}
      >
        {games.map((game, i) => (
          <GamingItem key={i} game={game} />
        ))}
      </Carousel>
    </Stack>
  );
};

export default Gaming;
