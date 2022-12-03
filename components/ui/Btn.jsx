import { Button } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

const Btn = (props) => {
  const { text, img, compact, variant } = props;

  return (
    <Button
      variant={variant}
      radius="xl"
      compact={compact}
      style={{ fontSize: '16px' }}
      leftIcon={
        typeof props.img !== 'string' ? (
          <div>{props.img}</div>
        ) : (
          <div
            style={{
              width: '20px',
              height: '20px',
              position: 'relative',
              borderRadius: '50%',
              overflow: 'hidden',
            }}
          >
            <Image src={props.img} alt="" layout="fill" />
          </div>
        )
      }
      styles={(theme) => ({
        root: {
          padding: `${!compact ? '5px 14px' : '0px 8px'}`,
          color: 'white',
          fontSize: `${compact ? '14px' : '16px'}`,
          textAlign: 'center',
          textTransform: 'capitalize',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',

          '&:hover': {
            backgroundColor: `${
              variant === 'subtle' ? theme.fn.darken('#99a29e', 0.05): "none"
            }`,
          },
        },

        leftIcon: {
          marginRight: `${img ? '4px' : '0'}`,
        },
      })}
    >
      {text}
    </Button>
  );
};

export default Btn;
