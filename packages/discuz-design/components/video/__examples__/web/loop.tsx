import React from 'react';
import { Video } from '@discuzqfe/design';

export default function BaseVideo() {
  return (
    <div>
      <Video
        src="https://mat1.gtimg.com/bbs/qqnewslite/20191024/mp4/pandastar-v.mp4"
        width={400}
        height={400}
        loop={true}
      />
    </div>
  );
}
