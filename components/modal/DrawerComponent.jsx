import { Drawer } from '@mantine/core';
import React from 'react';
import MenuBtn from '../ui/MenuBtn';
import ListDrawerComponent from './ListDrawerComponent';

const DrawerComponent = ({
  opened,
  text,
  handle,
  title,
  lists,
  children,
  handClickCategories,
  handleClickPopular,
  type,
}) => {
  return (
    <Drawer
      withCloseButton={false}
      withOverlay={false}
      opened={opened}
      overlayBlur={4}
      overlayOpacity={0.1}
      transition="slide-left"
      transitionDuration={400}
      transitionTimingFunction="ease"
      size="md"
    >
      <MenuBtn
        text={text}
        arrowPosition="left"
        size="md"
        padding="15px"
        handle={handle}
      />

      <ListDrawerComponent
        title={title}
        lists={lists}
        handClickCategories={handClickCategories}
        handleClickPopular={handleClickPopular}
        type={type}
      />

      {children}
    </Drawer>
  );
};

export default DrawerComponent;
