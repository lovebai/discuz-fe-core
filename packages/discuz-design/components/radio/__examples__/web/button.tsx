import React from 'react';
import { Radio } from '@discuzqfe/design';

export default function CheckboxExample() {
  return (
    <div className="page">
      <div>
        <Radio.Group block defaultValue='2' type="button">
          <Radio name="1">选项1</Radio>
          <br />
          <Radio name="2">选项2</Radio>
          <br />
          <Radio name="3">选项3</Radio>
          <br />
          <Radio name="4">选项4</Radio>
          <br />
          <Radio name="5">较长的选项5</Radio>
          <br />
          <Radio name="6">更长一点的选项6</Radio>
        </Radio.Group>
      </div>
    </div>
  );
}

