import React, { useEffect, useRef } from 'react';
import { Slider } from '@discuzqfe/design';

export default function SliderExample() {
  return (
    <div>
      <Slider defaultValue={30} disabled />
    </div>
  );
}
