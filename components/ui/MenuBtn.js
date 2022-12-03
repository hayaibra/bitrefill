import {
  Avatar,
  Group,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { ChevronRight, ChevronLeft } from 'tabler-icons-react';
import React from 'react';

const MenuBtn = ({
  text,
  img,
  position,
  icon,
  // handleClickGift,
  // handleClickCategories,
  handle,
  arrowPosition,
  size,
  padding,
  color,
}) => {
  let existImg;
  if (!img && !icon && arrowPosition === 'right') {
    existImg = true;
  }
  return (
    <UnstyledButton
      onClick={handle}
      component="button"
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: `${padding}`,
        color: `${color === 'default' ? theme.colors.dark[0] : 'white'}`,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          color: `${color === 'default' && 'white'}`,
        },
      })}
    >
      <Group position={position} spacing="none">
        {img && <Avatar src={img} radius="xl" size="sm" />}

        {icon && (
          <Avatar radius="xl" size="sm">
            {icon}
          </Avatar>
        )}
        {arrowPosition === 'left' && <ChevronLeft size={20} />}
        <Text size={size ? size : 'xl'} weight={500}>
          {text}
        </Text>

        {existImg && <ChevronRight size={20} />}
      </Group>
    </UnstyledButton>
  );
};

export default MenuBtn;
