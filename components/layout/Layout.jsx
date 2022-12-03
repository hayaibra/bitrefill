import React, { useState } from 'react';
import { AppShell, createStyles, useMantineTheme } from '@mantine/core';
import MainHeader from '../header/MainHeader';
import MainFooter from '../footer/MainFooter';

const useStyles = createStyles((theme) => ({
  main: {
    padding: '48px 135px 30px 135px',

    '@media(max-width: 1287px)': {
      padding: '48px 24px 30px 24px',
    },
  },
}));

const Layout = ({ children }) => {
  const [opened, setOpened] = useState(false);
  const [isEnter, setIsEnter] = useState(false);
  const [id, setId] = useState(null);
  const theme = useMantineTheme();
  const { classes } = useStyles();

  const handleEnter = (e) => {
    setIsEnter(true);
    setId(e.target.id);
  };
  const handleLeave = () => {
    setIsEnter(false);
  };
  const handleClick = () => {
    setOpened(!opened);
  };

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
        body: {
          overflow: 'hidden',
        },
      }}
      classNames={{ main: classes.main, body: classes.body }}
      header={
        <MainHeader
          handleEnter={handleEnter}
          handleLeave={handleLeave}
          id={id}
          isEnter={isEnter}
          handleClick={handleClick}
          opened={opened}
          setOpened={setOpened}
        />
      }
      footer={<MainFooter />}
    >
      {children}
    </AppShell>
  );
};

export default Layout;
