import { Title, Divider, Space } from '@mantine/core';
import React from 'react';
import ContentComponent from './ContentComponent';

const DetailComponent = ({ param }) => {
  const { title, content, div } = param;

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <Title size="h4" color="white">
          {title}
        </Title>
        <Space h="md" />
        <ContentComponent content={content} />
      </div>
      {div && <Divider orientation="vertical" />}
    </>
  );
};

export default DetailComponent;
