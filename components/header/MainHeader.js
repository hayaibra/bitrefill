import { Header, MediaQuery} from '@mantine/core';
import React from 'react';
import ModalComponent from '../modal/ModalComponent';
import BottomHeader from './BottomHeader';
import HoverBox from './HoverBox';
import MiddleHeader from './MiddleHeader';
import TopHeader from './TopHeader';

const MainHeader = ({
  handleEnter,
  handleLeave,
  id,
  isEnter,
  handleClick,
  opened,
  setOpened,
}) => {
  return (
    <MediaQuery
      query="(min-width: 0) and (max-width:960px)"
      styles={{ height: '70px' }}
    >
      <Header style={{ position: 'relative' }} height={133}>
        <div>
          <TopHeader />
          <MiddleHeader handleClick={handleClick} />
          <BottomHeader handleEnter={handleEnter} handleLeave={handleLeave} />
          {isEnter && (
            <HoverBox
              handleEnter={handleEnter}
              handleLeave={handleLeave}
              id={id}
            />
          )}
          {opened && <ModalComponent opened={opened} setOpened={setOpened} />}
        </div>
      </Header>
    </MediaQuery>
  );
};

export default MainHeader;
