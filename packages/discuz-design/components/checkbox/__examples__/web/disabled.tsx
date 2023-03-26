import React from "react";
import { Checkbox } from '@discuzqfe/design';

export default function CheckboxExample() {
  return (
    <div className="page">
      <div>
        <Checkbox defaultChecked={false} disabled />
        <br />
        <Checkbox defaultChecked disabled />
      </div>
    </div>
  );
}
