import React from 'react';
import { Checkbox } from '@discuzqfe/design';

export default function CheckboxExample() {
  return (
    <div className="page">
      <div>
        <Checkbox.Group block defaultValue={['2']} type="button">
          <Checkbox name="1">选项1</Checkbox>
          <br />
          <Checkbox name="2">选项2</Checkbox>
          <br />
          <Checkbox name="3">选项3</Checkbox>
          <br />
          <Checkbox name="4">选项4</Checkbox>
          <br />
          <Checkbox name="5">较长的选项5</Checkbox>
          <br />
          <Checkbox name="6">更长一点的选项6</Checkbox>
        </Checkbox.Group>
      </div>
    </div>
  );
}

