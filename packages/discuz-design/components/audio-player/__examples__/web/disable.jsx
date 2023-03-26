import React, { useState } from 'react';
import { AudioPlayer } from '@discuzqfe/design';

export default function FlexExample() {

  return (
    <div>
      <AudioPlayer
        src={'https://mp3.9ku.com/hot/2014/07-16/642431.mp3'}
        fileName="平凡之路"
        disabled={true}
      />
    </div>
  );
}
