import type { ComponentType } from 'react';

import type { SetQRContent } from '../QRCode/QRCode';
import type { IconProps } from '../Icon/Icon';

export interface TabProps {
  setContent: SetQRContent;
}

export interface Tab {
  name: string;
  description: string;
  Component: ComponentType<TabProps>;
  Icon: ComponentType<IconProps>;
}

export type Tabs = Tab[];
