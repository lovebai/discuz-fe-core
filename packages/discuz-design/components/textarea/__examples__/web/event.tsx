import { Input } from '@discuzqfe/design';
import React, { useState } from "react";

export default function Example1() {
  const [value, setValue] = useState("");

  return (
    <>
      <Input.Textarea
        value={value}
        rows={2}
        placeholder="事件监听"
        onChange={(e) => setValue(e.target.value)}
        onFocus={(e) => console.log("聚焦事件", e)}
        onBlur={(e) => console.log("失去焦点事件", e)}
      />
    </>
  );
}
