import React from 'react';
import MenuBtn from '../ui/MenuBtn';

const ListItem = ({ list, handleClickCategories, handleClickPopular }) => {
  return (
    <>
      <li>
        <MenuBtn
          text={typeof list === "string" ? list : list.text}
          size="md"
          padding="6px 20px"
          color="default"
          position={list.position}
          arrowPosition={list.arrowposition}
          handle={
            list.id === 'categories'
              ? handleClickCategories
              : handleClickPopular
          }
        />
      </li>
    </>
  );
};

export default ListItem;
