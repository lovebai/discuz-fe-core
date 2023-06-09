import { Ref } from 'react';

export function mergeRefs<T>(...refs: Ref<T>[]) {
  return (instance: T) => {
    for (const ref of refs) {
      if (typeof ref === 'function') {
        ref(instance);
      } else if (ref) {
        (ref as any).current = instance;
      }
    }
  };
}
