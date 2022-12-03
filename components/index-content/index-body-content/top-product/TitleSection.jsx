import { createStyles, Group, Select, Text, Title } from '@mantine/core';
import React from 'react';
import { ChevronDown } from 'tabler-icons-react';

const useStyle = createStyles((theme) => ({
  input: {
    width: '120px',
    '&:focus': {
      borderColor: 'white',
    },
  },
}));

const TitleSection = () => {
  const { classes } = useStyle();

  return (
    <Group position="apart" mb="md" sx={{ flexWrap: 'nowrap' }}>
      <Title
        color="white"
        sx={(theme) => ({
          fontSize: '40px',
          [theme.fn.smallerThan("sm")]: {
            fontSize: '20px',
          },
        })}
        fw={600}
      >
        Top Products
      </Title>
      <Group sx={{ flexWrap: 'nowrap' }}>
        <Text>Sort by:</Text>
        <Select
          classNames={{ input: classes.input }}
          placeholder="Pick one"
          variant="default"
          radius="xl"
          rightSection={<ChevronDown size={20} />}
          rightSectionWidth={50}
          styles={{ rightSection: { pointerEvents: 'none' } }}
          data={['Featured', 'Popular', 'A-Z', 'Recently Added', 'Rewards']}
        />
      </Group>
    </Group>
  );
};

export default TitleSection;
