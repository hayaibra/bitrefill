import { Box, Group, MediaQuery } from '@mantine/core';
import React from 'react';
import { World, Help } from 'tabler-icons-react';
import Btn from '../ui/Btn';

const btnArr = [
  {
    text: 'Germany',
    img: 'https://www.bitrefill.com/content/cn/c_limit%2Cd_flags%3Aunknown-flag.png%2Ce_trim%2Ch_24%2Cw_24/v23/flags%2FDE.png',
    compact: true,
    variant: 'subtle',
  },
  {
    text: 'English',
    img: <World />,
    compact: true,
    variant: 'subtle',
  },
  {
    text: 'Help',
    img: <Help />,
    compact: true,
    variant: 'subtle',
  },
];

const TopHeader = () => {
  return (
    <Box
      sx={{
        padding: '4px 0',
        backgroundColor: '#303633',
        '@media (min-width: 0) and (max-width:960px)': {
          display: 'none',
        },
      }}
    >
      <MediaQuery query="(max-width: 1287px)" styles={{ padding: '0 24px' }}>
        <Group
          position="right"
          spacing="none"
          sx={{
            padding: '0 135px',
          }}
        >
          {btnArr.map((btn, i) => (
            <Btn
              key={i}
              text={btn.text}
              img={btn.img}
              compact={btn.compact}
              variant={btn.variant}
            />
          ))}
        </Group>
      </MediaQuery>
    </Box>
  );
};

export default TopHeader;
