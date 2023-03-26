import React, { useState } from 'react';
import { Switch } from '@discuzqfe/design';

export default function SwitchExample() {
  return (
    <>
      <Switch disabled />
      <br />
      <Switch defaultChecked disabled />
    </>
  );
}
