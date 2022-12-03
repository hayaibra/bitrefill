import { Box, Space, Text } from '@mantine/core';
import React from 'react';
import Image from 'next/image';

const TextComponent = ({ text }) => {
  return (
    <>
      {typeof text === 'string' ? (
        <Text
          fw={500}
          fz="lg"
          sx={{
            transition: ' 0.3s liner',
            cursor: 'pointer',
            marginBottom: '5px',

            '&:hover': {
              color: 'white',
              textDecoration: 'underline',
            },
          }}
        >
          {text}
        </Text>
      ) : (
        <div style={{ display: 'inline-flex' }}>
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                width: '150px',
                height: '150px',
              }}
            >
              <Image src={text.img} alt="" width="130" height="130" />
            </Box>
            <Space h={10} />
            <Text
              fw={500}
              fz="lg"
              sx={{
                transition: ' 0.3s liner',
                cursor: 'pointer',

                '&:hover': {
                  color: 'white',
                  textDecoration: 'underline',
                },
              }}
            >
              {text.text}
            </Text>
          </Box>
          <Space w={30} />
        </div>
      )}
    </>
  );
};

export default TextComponent;
