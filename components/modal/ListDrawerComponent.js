import { Title } from '@mantine/core';
import React from 'react';
import ListItem from './ListItem';

const ListDrawerComponent = ({
  title,
  lists,
  handleClickCategories,
  handleClickPopular,
}) => {
  return (
    <ul style={{ listStyle: 'none', paddingLeft: '0', margin: '0' }}>
      <Title
        sx={{ fontSize: '18px' }}
        weight={500}
        color="white"
        px="lg"
        py="sm"
      >
        {title}
      </Title>
      {lists.map((list, i) => (
        <ListItem
          key={i}
          list={list}
          handleClickCategories={handleClickCategories}
          handleClickPopular={handleClickPopular}
        />
      ))}
    </ul>
  );
};

export default ListDrawerComponent;
