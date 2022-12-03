import { Group, MediaQuery, Text } from '@mantine/core';
import React from 'react';

const BottomHeader = ({ handleEnter, handleLeave }) => {
  return (
    <MediaQuery
      query="(min-width: 0) and (max-width:960px)"
      styles={{ display: 'none' }}
    >
      <MediaQuery query="(max-width: 1287px)" styles={{ padding: '0 24px' }}>
        <Group
          sx={{
            padding: '0 135px',
            alignItems: 'center',
          }}
        >
          <div style={{ cursor: 'pointer' }}>
            <Text
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
              id="gift"
              component="a"
              color="white"
              sx={{
                padding: '7px 0 ',
                transition: 'border 0.3s',
                position: 'relative',

                '&:hover': {
                  color: 'red',
                  borderBottom: '2px solid red',
                },
              }}
              fz="lg"
              fw={700}
            >
              Gift Cards
            </Text>
          </div>
          <div style={{ cursor: 'pointer' }}>
            <Text
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
              id="phone"
              component="a"
              color="white"
              sx={{
                padding: '7px 0',
                height: '100%',
                '&:hover': {
                  borderBottom: '2px solid red',
                  color: 'red',
                },
              }}
              fz="lg"
              fw={700}
            >
              Phone Refills
            </Text>
          </div>
        </Group>
      </MediaQuery>
    </MediaQuery>
  );
};

export default BottomHeader;
