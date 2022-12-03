import { Title } from '@mantine/core';
import React from 'react';
import MenuBtn from '../ui/MenuBtn';

const ContentDrawer = ({
  text,
  handle,
  lists,
  title,
  handleClickCategories,
  handleClickPopular,
  color,
  padding,
}) => {
  return (
    <>
      <MenuBtn
        text={text}
        arrowPosition="left"
        size="md"
        padding="15px"
        handle={handle}
      />
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
        {lists.map((list, i) => {
          typeof list === 'string' ? (
            <li key={i}>
              <MenuBtn
                text={list}
                size="md"
                padding="6px 20px"
                color="default"
              />
            </li>
          ) : (
            <li key={i}>
              <MenuBtn
                text={list.text}
                arrowPosition={list.arrowposition}
                size="md"
                padding={padding}
                color={color}
                position={list.position}
                handle={
                  list.text === 'Categories'
                    ? handleClickCategories
                    : handleClickPopular
                }
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContentDrawer;
