import { Box, MediaQuery } from '@mantine/core';
import React from 'react';
import ParamComponent from '../hover-cmb/ParamComponent';

const gifts = [
  {
    id: '1',
    title: 'featured',
    div: true,
    content: ['all gift cards', 'popular', 'recently added', 'rewards'],
  },
  {
    id: '2',
    title: 'categories',
    div: true,
    content: [
      [
        'apparel',
        'ecommerce',
        'electronic',
        'entertainment',
        'experiences',
        'food',
        'games',
      ],
      [
        'gifts',
        'groceries',
        'health & beauty',
        'home',
        'music',
        'other products',
        'pets',
      ],
      ['restaurant', 'retail', 'streaming', 'travel', 'voIP'],
    ],
  },
  {
    id: '3',
    title: 'popular in germany',
    content: [
      'amazon.de',
      'zalando',
      'lastminute.com',
      'mediaMarket',
      'hotels.com',
      'steam EUR',
    ],
  },
];
const phones = [
  {
    title: 'featured',
    div: true,
    content: ['refills'],
  },
  {
    title: 'categories',
    div: true,
    content: ['prepaid phones', 'phone codes', 'phone codes', 'other bundles'],
  },
  {
    title: 'popular in germany',
    div: true,
    content: [
      'vodafone PIN',
      'ortel mobile PIN',
      'O2',
      'E-Plus',
      'TOOM BAUMARKT PIN',
      'Ay Yildiz',
    ],
  },
  {
    title: 'trending',
    content: [
      {
        img: 'https://www.bitrefill.com/content/cn/v1557518512/vodafone-icon.svg',
        text: 'Vodafone PIN',
      },
      {
        img: 'https://www.bitrefill.com/content/cn/v1561982046/ortel.svg',
        text: 'Ortel Mobile PIN',
      },
    ],
  },
];

const HoverBox = ({ handleEnter, handleLeave, id }) => {
  return (
    <MediaQuery query="(max-width: 1287px)" styles={{ padding: '20px 24px' }}>
      <Box
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        sx={(theme) => ({
          position: 'absolute',
          width: '100%',
          backgroundColor: theme.colors.gray[9],
          top: '133px',
          padding: '20px 135px',
        })}
      >
        <ParamComponent params={id === 'gift' ? gifts : phones} />
      </Box>
    </MediaQuery>
  );
};

export default HoverBox;
