import {
  MediaQuery,
  Button,
  Avatar,
  Stack,
  Grid,
  Group,
  Divider,
  Title,
  Switch,
  Box,
  useMantineColorScheme,
} from '@mantine/core';
import React from 'react';
import Image from 'next/image';
import FooterBoxes from './FooterBoxes';
import {
  Sun,
  MoonStars,
  World,
  BrandTwitter,
  BrandTelegram,
  BrandFacebook,
  BrandReddit,
  BrandInstagram,
} from 'tabler-icons-react';
import { useStyles } from './Styles';

const boxes = [
  {
    title: 'Live on crypto',
    items: ['Gift Cards', 'Phone Refills', 'Rewards'],
  },
  {
    title: 'Support',
    items: ['Help', 'Contact Us', 'Product Request', 'Purchase Limits'],
  },
  {
    title: 'Company',
    items: ['Careers', 'Press', 'Blog', 'Reviews'],
  },
  {
    title: 'Resources',
    items: [
      'Integrate Bitrefill',
      'Refer-a-Friend Program',
      'Affiliate',
      'Video Tutorials',
    ],
  },
];

const MainFooter = () => {
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <>
      <MediaQuery
        query="(max-width: 1287px)"
        styles={{ padding: '64px 24px 0 64px' }}
      >
        <footer className={classes.footer}>
          <Box
            sx={(theme) => ({
              display: 'flex',
              justifyContent: 'space-between',
              padding: '64px 0',

              [theme.fn.smallerThan('sm')]: {
                flexDirection: 'column',
              },
            })}
          >
            <Stack
              className={classes.logo}
              align="start"
              sx={{ width: '300px' }}
              justify="start"
            >
              <Image
                src={require('../../public/svg8.png')}
                width="111"
                height="28"
                alt=""
              />
              <Stack spacing="none" align="start">
                <Button
                  compact
                  color="gray"
                  variant="subtle"
                  size="md"
                  radius="xl"
                  px="0"
                  leftIcon={
                    <Avatar
                      src="https://www.bitrefill.com/content/cn/c_limit%2Cd_flags%3Aunknown-flag.png%2Ce_trim%2Ch_24%2Cw_24/v23/flags%2FDE.png"
                      radius="xl"
                      size="xs"
                    />
                  }
                >
                  Germany
                </Button>
                <Button
                  px="0"
                  variant="subtle"
                  size="md"
                  radius="xl"
                  leftIcon={<World size={20} />}
                  color="gray"
                >
                  English
                </Button>
              </Stack>
            </Stack>
            <Grid gutter="xl" sx={{ flex: 1 }}>
              {boxes.map((box, i) => (
                <FooterBoxes key={i} box={box} />
              ))}
            </Grid>
          </Box>
          <div>
            <Divider size="xs" color="gray.7" />
            <Box
              sx={(theme) => ({
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '24px 0',

                [theme.fn.smallerThan('sm')]: {
                  flexDirection: 'column',
                  alignItems: 'center',
                },
              })}
            >
              <Group>
                <Title fz="sm" color="gray.5" fw={400}>
                  © Copyright 2022 .
                </Title>
                <Title
                  fz="sm"
                  variant="link"
                  color="gray.5"
                  fw={400}
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      color: 'white',
                    },
                  }}
                >
                  Terms and Conditions .
                </Title>
                <Title
                  fz="sm"
                  variant="link"
                  color="gray.5"
                  fw={400}
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      color: 'white',
                    },
                  }}
                >
                  Privacy Policy
                </Title>
              </Group>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '30px',
                  }}
                >
                  <p
                    color="gray.5"
                    style={{
                      margin: '0',
                      paddingTop: '10px',
                      fontSize: '16px',
                      marginRight: '10px',
                    }}
                  >
                    Theme
                  </p>
                  <Switch
                    checked={colorScheme === 'dark'}
                    onChange={() => toggleColorScheme()}
                    size="lg"
                    // onLabel={<Sun color={theme.white} size={20} stroke={1.5} />}
                    offLabel={
                      <MoonStars
                        // color={theme.colors.gray[6]}
                        size={20}
                        stroke={1.5}
                      />
                    }
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '20px',
                    gap: '15px',
                  }}
                >
                  <div style={{ cursor: 'pointer' }}>
                    <BrandTwitter />
                  </div>
                  <div style={{ cursor: 'pointer' }}>
                    <BrandTelegram />
                  </div>
                  <div style={{ cursor: 'pointer' }}>
                    <BrandFacebook />
                  </div>
                  <div style={{ cursor: 'pointer' }}>
                    <BrandReddit />
                  </div>
                  <div style={{ cursor: 'pointer' }}>
                    <BrandInstagram />
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </footer>
      </MediaQuery>
    </>
  );
};

export default MainFooter;
