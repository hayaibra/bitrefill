import {
  Box,
  createStyles,
  MediaQuery,
  Navbar,
  Select,
  Stack,
  Title,
} from '@mantine/core';
import React from 'react';
import { ChevronDown } from 'tabler-icons-react';

const products = [
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
  'Prepaid Phones',
  'Phone Codes',
  'Other Bundles',
  'Bitcion',
];

const useStyle = createStyles((theme) => ({
  input: {
    '&:focus': {
      borderColor: 'white',
    },
  },
}));

const NavComponent = () => {
  const { classes } = useStyle();
  return (
    <div>
      <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
        <Stack>
          <Navbar.Section sx={{ width: '300px' }}>
            <Title py="xs" px="0" size="h4" color="red" fw={600} underline>
              Top Products
            </Title>
            <Box>
              {products.map((product, i) => (
                <Title
                  key={i}
                  variant="link"
                  py="xs"
                  px="0"
                  size="h4"
                  fw={600}
                  sx={{ color: 'white' }}
                >
                  {product}
                </Title>
              ))}
            </Box>
          </Navbar.Section>
        </Stack>
      </MediaQuery>
      <MediaQuery largerThan="md" styles={{ display: 'none' }}>
        <Select
          mb="xl"
          classNames={{ input: classes.input }}
          placeholder="Pick one"
          variant="default"
          radius="xl"
          rightSection={<ChevronDown size={20} />}
          rightSectionWidth={50}
          styles={{ rightSection: { pointerEvents: 'none' } }}
          data={products}
        />
      </MediaQuery>
    </div>
  );
};

export default NavComponent;
