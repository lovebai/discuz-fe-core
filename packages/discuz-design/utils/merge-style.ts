import React from 'react';

export function mergeStyle(...styles: React.CSSProperties[]) {
  return styles.reduce<React.CSSProperties>((merged, style) => (style ? Object.assign(merged, style) : merged), {});
}
