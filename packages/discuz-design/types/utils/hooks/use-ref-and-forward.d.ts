import { Ref } from 'react';
export declare function useRefAndForward<T>(initialValue: T, forwardedRef: Ref<T>): [import("react").MutableRefObject<T>, (instance: T) => void];
