import React from 'react';
import { Text, Box, Group } from '@mantine/core';
import TextComponent from './TextComponent';

const ContentComponent = ({ content }) => {
  return (
    <>
      {content.length === 3 ? (
        <Group position="apart" spacing="xl">
          {content.map((box, i) => (
            <Box key={i}>
              {box.map((text, i) => (
                <Text
                  key={i}
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
                  {text}
                </Text>
              ))}
            </Box>
          ))}
        </Group>
      ) : (
        <div>
          {content.map((text, i) => (
            <TextComponent text={text} key={i} />
          ))}
        </div>
      )}
    </>
  );
};

export default ContentComponent;
