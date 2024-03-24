import type { ReactNode, ComponentType } from 'react';
import type { IconProps } from '../Icon/Icon';

export interface ParameterLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  Icon: ComponentType<IconProps>;
}
