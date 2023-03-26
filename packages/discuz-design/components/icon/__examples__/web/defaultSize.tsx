import { Icon } from '@discuzqfe/design';
import React from 'react';

export default function DefaultSize() {
  return (
    <>
      <Icon name="LoadingOutlined" size={50} />
      <Icon name="LoadingOutlined" style={{ marginLeft: '10px' }} size={'large'} />
      <Icon name="LoadingOutlined" style={{ marginLeft: '10px' }} size={'small'} />
    </>
  );
}
