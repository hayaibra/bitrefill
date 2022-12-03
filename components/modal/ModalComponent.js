import {
  Box,
  Divider,
  Drawer,
  useMantineTheme,
} from '@mantine/core';
import React, { useState } from 'react';
import MenuBtn from '../ui/MenuBtn';
import { World, Help } from 'tabler-icons-react';
import DrawerComponent from './DrawerComponent';

const btnArr = [
  {
    text: 'Germany',
    img: 'https://www.bitrefill.com/content/cn/c_limit%2Cd_flags%3Aunknown-flag.png%2Ce_trim%2Ch_24%2Cw_24/v23/flags%2FDE.png',
    compact: true,
    variant: 'subtle',
  },
  {
    text: 'English',
    icon: <World />,
    compact: true,
    variant: 'subtle',
  },
  {
    text: 'Help',
    icon: <Help />,
    compact: true,
    variant: 'subtle',
  },
];

const lists = [
  {
    text: 'All gifts cards',
  },
  {
    text: 'Popular',
  },
  {
    text: 'Recently Added',
  },
  {
    text: 'Rewards',
  },
  {
    text: 'Categories',
    arrowposition: 'right',
    position: 'apart',
    id: 'categories',
  },
  {
    text: 'Popular in Germany',
    arrowposition: 'right',
    position: 'apart',
    id: 'popular',
  },
];

const cats = [
  'Apparel',
  'Ecommerce',
  'Electronics',
  'Entertainments',
  'Experiences',
  'Food',
  'Games',
  'Gifts',
  'Groceries',
  'Health & Beauty',
  'Home',
  'Music',
  'Other Products',
  'Pets',
  'Restaurants',
  'Reatail',
  'Streaming',
  'Travel',
  'VoIP',
];

const populars = [
  'Amazon.de',
  'Zalando',
  'lastminute.com',
  'Lieferando',
  'Rewe',
  'MediaMarket',
];



const ModalComponent = ({ opened, setOpened }) => {
  const theme = useMantineTheme();
  const [openGift, setOpenGift] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);
  const [openPopular, setOpenPopular] = useState(false);
  // const [openRefill, setOpenRefill] = useState(false);

  const handleClickGift = () => {
    setOpenGift(!openGift);
    console.log(openGift);
  };
  // const handleClickRefill = () => {
  //   setOpenRefill(!openRefill);
  // };

  const handleClickCategories = () => {
    setOpenCategories(!openCategories);
  };

  const handleClickPopular = () => {
    setOpenPopular(!openPopular);
    // console.log(openCategories);
  };
  return (
    <Box sx={{ height: '100vh', position: 'relative' }}>
      <Drawer
        opened={opened}
        overlayColor={theme.colorScheme === 'dark' && 'white'}
        overlayOpacity={0.1}
        overlayBlur={6}
        sx={{ paddingTop: '18px' }}
        size="md"
        withCloseButton={false}
        onClose={() => setOpened(!opened)}
      >
        <MenuBtn
          text="Gift Cards"
          position="apart"
          handle={handleClickGift}
          arrowPosition="right"
          padding="15px"
        />
        <MenuBtn
          text="Phone Refills"
          position="apart"
          arrowPosition="right"
          padding="15px"
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '0',
            width: '100%',
          }}
        >
          <Divider />
          {btnArr.map((btn, i) => (
            <MenuBtn
              key={i}
              text={btn.text}
              img={btn.img}
              icon={btn.icon}
              position="flex-start"
              padding="15px"
            />
          ))}
        </Box>
      </Drawer>
      {openGift && (
        <DrawerComponent
          opened={opened}
          text="Home"
          handle={handleClickGift}
          title=" Gift Cards"
          lists={lists}
          handleClickCategories={handleClickCategories}
          handleClickPopular={handleClickPopular}
        />
      )}
      {openCategories && (
        <DrawerComponent
          opened={opened}
          text="Gift Cards"
          handle={handleClickCategories}
          title="Categories"
          lists={cats}
        />
      )}
      {openPopular && (
        <DrawerComponent
          opened={opened}
          text="Gift Cards"
          handle={handleClickPopular}
          title="Popular in Germay"
          lists={populars}
          type="string"
        />
      )}
    </Box>
  );
};

export default ModalComponent;
