import { RefAttributes, forwardRef } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

export function forwardRefWithStatics<P, T = any, S = Record<string, unknown>>(
  component: React.RefForwardingComponent<T, P>,
  statics?: S,
): React.FunctionComponent<P & RefAttributes<T>> & S {
  return hoistNonReactStatics(forwardRef(component), statics as any) as any;
}
