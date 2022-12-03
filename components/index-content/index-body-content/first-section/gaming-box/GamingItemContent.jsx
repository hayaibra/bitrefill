import { Box, Group, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import React from 'react';
import Image from 'next/image';

const GamingItemContent = ({ item }) => {
  const { title, price, img, bgColor } = item;
  const theme = useMantineTheme();
  return (
    <Stack justify="space-between" spacing="lg">
      <Group spacing="xs" py="md" sx={{ flexWrap: 'nowrap' }}>
        <Box
          sx={{
            display: 'flex',
            // flexWrap:"nowrap",
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '2px',
            border: '1px solid #303633',
            backgroundColor: `${bgColor}`,
            height: '48px',
            width: '48px',
          }}
        >
          <Image src={img} alt="" width="38" height="38" />
        </Box>
        <Box></Box>
        {/*<Stack spacing="none">
          <Text
            // color="white"
            // fw={600}
            // size={theme.fn.smallerThan('sm') ? 'h5' : 'h4'}
            // size="h4"
          >
            {title}
          </Text>
          <Text
            // fz={theme.fn.smallerThan('sm') ? 'xs' : 'md'}
            // size="md"
            // color="dark.3"
            // fw={600}
          >
            {price}
          </Text>
        
        </Stack>*/}
      </Group>
    </Stack>
  );
};

export default GamingItemContent;
