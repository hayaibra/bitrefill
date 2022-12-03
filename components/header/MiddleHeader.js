import {
  ActionIcon,
  Group,
  // Image,
  Input,
  MediaQuery,
  // Title,
} from '@mantine/core';
import React from 'react';
import { Search, ShoppingCart, User, Menu2 } from 'tabler-icons-react';
import Btn from '../ui/Btn';
import Image from "next/image";

const b = [
  {
    text: 'login',
    img: null,
    compact: false,
    variant: 'light',
  },
  {
    text: 'create account',
    img: null,
    compact: false,
    variant: 'filled',
  },
  {
    text: 'cart',
    img: <ShoppingCart />,
    compact: false,
    variant: 'subtle',
  },
];

const MiddleHeader = ({ handleClick }) => {
  return (
    <MediaQuery query="(max-width: 1287px)" styles={{ padding: '0 24px' }}>
      <Group
        position="apart"
        sx={{
          padding: '0 135px',
          height: '64px',
          flexWrap: 'nowrap',
        }}
      >
        <Group position="apart" spacing="xs" sx={{ flexWrap: 'nowrap' }}>
          <MediaQuery query="(min-width:960px)" styles={{ display: 'none' }}>
            <ActionIcon size="xl" radius="xl" onClick={handleClick}>
              <Menu2 size={30} />
            </ActionIcon>
          </MediaQuery>
          <Image src={require('../../public/svg8.png')} alt="" width="110" height="28"/>
          <MediaQuery query="(max-width : 726px)" styles={{ display: 'none' }}>
            <Input
              variant="filled"
              icon={<Search size={18} color="white" />}
              placeholder="Search for products or phone number"
              radius="xl"
              size="md"
              style={{
                width: '350px',
              }}
            />
          </MediaQuery>
        </Group>
        <MediaQuery
          query="(min-width: 0) and (max-width:960px)"
          styles={{ display: 'none' }}
        >
          <Group>
            {b.map((c, i) => (
              <Btn
                text={c.text}
                img={c.img}
                key={i}
                compact={c.compact}
                variant={c.variant}
              />
            ))}
          </Group>
        </MediaQuery>
        <MediaQuery query="(min-width: 960px)" styles={{ display: 'none' }}>
          <Group spacing="none" sx={{ flexWrap: 'nowrap' }}>
            <MediaQuery query="(min-width:726px)" styles={{ display: 'none' }}>
              <ActionIcon size="xl" radius="xl">
                <Search size={30} />
              </ActionIcon>
            </MediaQuery>
            <ActionIcon size="xl" radius="xl">
              <User size={30} />
            </ActionIcon>
            <ActionIcon size="xl" radius="xl">
              <ShoppingCart size={30} />
            </ActionIcon>
          </Group>
        </MediaQuery>
      </Group>
    </MediaQuery>
  );
};

export default MiddleHeader;
