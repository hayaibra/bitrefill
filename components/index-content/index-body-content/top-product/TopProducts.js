import {
  Grid,
} from '@mantine/core';
import React from 'react';
import ProductItem from './ProductItem';

const products = [
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Ad22027%2Cc_pad%2Ch_151%2Cw_250/v1582706773/rewe.jpg',
    bgColor: '#D22027',
    height: '203px',
    name: 'Rewe',
    price: '€5 - €50',
    rate: '4.5',
    feature: true,
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Ad32e2e%2Cc_pad%2Ch_151%2Cw_250/v1555429587/hotels_com.jpg',
    bgColor: '#D32E2E',
    height: '203px',
    name: 'Hotels.com International',
    price: '$10 - $2000',
    rate: '4.8',
    feature: true,
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Ae31860%2Cc_pad%2Ch_242%2Cw_400/v1632327350/airbnb_latest.jpg',
    bgColor: '#E31860',
    height: '203px',
    name: 'Airbnb',
    price: '€50 - €200',
    rate: '5',
    feature: true,
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_242%2Cw_400/v1645192970/google-play-updated.jpg',
    bgColor: 'white',
    height: '203px',
    name: 'Google Play',
    price: '€5 - €100',
    rate: '4.6',
    feature: true,
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3A0058a3%2Cc_pad%2Ch_151%2Cw_250/v1553602580/ikea.jpg',
    bgColor: '#0058A3',
    height: '203px',
    name: 'IKEA',
    price: '€5 - €500',
    rate: '5',
    feature: true,
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3A074695%2Cc_pad%2Ch_242%2Cw_400/v1557503536/psn.jpg',
    bgColor: '#074695',
    height: '203px',
    name: 'PlayStation Store',
    price: '€5 - €120',
    rate: '5',
    feature: true,
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_181%2Cw_300/v1605208464/obi.jpg',
    bgColor: 'white',
    height: '203px',
    name: 'OBI',
    price: '€25 - €100',
    // rate: '5',
    feature: true,
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Af86601%2Cc_pad%2Ch_151%2Cw_250/v1647458456/lieferando-de.jpg',
    bgColor: '#F86601',
    height: '203px',
    name: 'Lieferando',
    price: '€20 - €100',
    rate: '5',
    // feature: true,
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_151%2Cw_250/v1565862841/media.jpg',
    bgColor: 'white',
    height: '203px',
    name: 'MediaMarkt',
    price: '€5 - €150',
    rate: '4.6',
    // feature: true,
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3A000000%2Cc_pad%2Ch_151%2Cw_250/v1580993558/saturn.jpg',
    bgColor: 'black',
    height: '203px',
    name: 'Saturn',
    price: '€5 - €150',
    rate: '5',
    // feature: true,
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_151%2Cw_250/v1561131423/otto.jpg',
    bgColor: 'white',
    height: '203px',
    name: 'OTTO',
    price: '€25 - €100',
    rate: '5',
    // feature: true,
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Aeee8e2%2Cc_pad%2Ch_181%2Cw_300/v1604411343/h_and_m_new.jpg',
    bgColor: '#EEE8E2',
    height: '203px',
    name: 'H&M',
    price: '€10 - €300',
    // rate: '5',
    // feature: true,
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3A152149%2Cc_pad%2Ch_181%2Cw_300/v1612448179/flightgift_new.jpg',
    bgColor: '#152149',
    height: '203px',
    name: 'Flightgift EUR',
    price: '€25 - €10000',
    rate: '5',
    // feature: true,
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_151%2Cw_250/v1593603665/asos.jpg',
    bgColor: 'white',
    height: '203px',
    name: 'Asos',
    price: '€10 - €250',
    rate: '5',
    // feature: true,
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_151%2Cw_250/v1556099168/vodafone.jpg',
    bgColor: 'white',
    height: '203px',
    name: 'Vodafone PIN',
    price: '€15 - €25',
    rate: '4.5',
    // feature: true,
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_151%2Cw_250/v1582792677/douglas.jpg',
    bgColor: 'white',
    height: '203px',
    name: 'Douglas',
    price: '€10 - €100',
    // rate: '4.5',
    // feature: true,
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_242%2Cw_400/v1556129468/xbox.jpg',
    bgColor: 'white',
    height: '203px',
    name: 'Xbox',
    price: '€25 - €100',
    // rate: '4.5',
    // feature: true,
  },
  {
    img: 'https://www.bitrefill.com/content/cn/v1561982046/ortel.svg',
    bgColor: 'white',
    height: '203px',
    name: 'Ortel Mobile PIN',
    price: '€5 - €30',
    rate: '4.8',
    // feature: true,
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_151%2Cw_250/v1600067899/twitch_usa.jpg',
    bgColor: 'white',
    height: '203px',
    name: 'Twitch',
    price: '€15 - €150',
    // rate: '4.8',
    // feature: true,
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_242%2Cw_400/v1550663391/netflix.jpg',
    bgColor: 'white',
    height: '203px',
    name: 'Netflix',
    price: '€25 - €50',
    rate: '3.7',
    // feature: true,
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_151%2Cw_250/v1557851549/o2.jpg',
    bgColor: 'white',
    height: '203px',
    name: 'O2',
    price: '€15 - €50',
    rate: '4.5',
    // feature: true,
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_151%2Cw_250/v1562963219/e.jpg',
    bgColor: 'white',
    height: '203px',
    name: 'E-Plus',
    price: '€15 - €50',
    rate: '5',
    // feature: true,
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_181%2Cw_300/v1605066432/galeria.jpg',
    bgColor: 'white',
    height: '203px',
    name: 'Galeria Kaufhof',
    price: '€20 - €50',
    // rate: '5',
    // feature: true,
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_151%2Cw_250/v1558972271/nike.jpg',
    bgColor: 'white',
    height: '203px',
    name: 'Nike',
    price: '€5 - €500',
    rate: '5',
    // feature: true,
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_151%2Cw_250/v1556129417/nintendo.jpg',
    bgColor: 'white',
    height: '203px',
    name: 'Nintendo eShop',
    price: '€15 - €50',
    rate: '5',
    // feature: true,
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_151%2Cw_250/v1560883553/ay.jpg',
    bgColor: 'white',
    height: '203px',
    name: 'Ay Yildiz',
    price: '€15 - €50',
    rate: '5',
    // feature: true,
  },
  {
    img: 'https://www.bitrefill.com/content/cn/b_rgb%3Affffff%2Cc_pad%2Ch_151%2Cw_250/v1582330772/flixbus.jpg',
    bgColor: 'white',
    height: '203px',
    name: 'FlixBus',
    price: '€10 - €100',
    rate: '5',
    // feature: true,
  },
];

const TopProducts = () => {
  return (
    <Grid gutter="xl">
      {products.map((product, i) => (
        <ProductItem key={i} product={product} />
      ))}
    </Grid>
  );
};

export default TopProducts;