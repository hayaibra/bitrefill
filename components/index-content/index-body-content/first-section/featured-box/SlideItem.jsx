import { Box, Button, Stack, Text, Title } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

const SlideItem = ({ slide }) => {
  const { title, category, image, bgColor, featured } = slide;
  return (
    <Stack spacing="xl">
      <Stack spacing="none">
        <Text fz="xs" fw={600} color="red">
          Featured
        </Text>
        <Title sx={{ fontSize: '24px' }} color="white" fw={500}>
          {title}
        </Title>
        <Text fz="md" fw={600} color="gray">
          {category}
        </Text>
      </Stack>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: `${bgColor}`,
          cursor: 'pointer',
          transition: '0.1s',
          flexDirection: 'column',
          position: 'relative',
          padding:"40px",

          '&:hover': {
            transform: 'translate(0, -2px)',
          },
        }}
      >
        {featured && (
          <Button sx={{ position: 'absolute', left: '15px', top: '15px', zIndex:1 }} radius="xl" color="dark" compact>
            Featured
          </Button>
        )}

        <Image src={image} alt="" width="416" height="252"/>
      </Box>
    </Stack>
  );
};

export default SlideItem;
