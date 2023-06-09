import React, { useState, useEffect } from 'react';
import { View, Text, Button } from '@tarojs/components';
import Progress from '../../index';

export default function ProgressExample() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setPercent(percent => (percent % 100) + 10),
      1000,
    );
    return () => clearInterval(timer);
  }, []);
  return (
    <>
    <Button onClick={() => setPercent(percent => (percent % 100) + 10)}>点击</Button>
      <Progress percent={percent} text={percent => `${percent} %`} />
      <Progress percent={30} theme="default" text="运行中" />
      <Progress percent={60} theme="danger" text="运行失败" />
      <Progress percent={90} theme="success" text="运行成功" />
      <Progress type="circle" percent={percent} tips="正在上传应用，请稍等" />
        <hr />
      <Progress
        type="circle"
        theme="default"
        percent={percent}
        text="加固中"
        tips={
          <>
            <p>大约需要5分钟，您可以先去进行其他操作，稍后再来看看。</p>
            <p>
              推荐您使用<a href="#">乐固自助加固</a>工具，可自动加固、签名。
            </p>
          </>
        }
      />
      <hr />
      <Progress type="circle" percent={percent}>
        <View>
          <Text>自定义视图</Text>
          <View>描述</View>
        </View>
      </Progress>
    </>
  );
}
