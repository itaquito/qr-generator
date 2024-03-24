import type { ComponentType } from 'react';

import type { SetQRContent } from '../QRCode/QRCode';

export interface TabProps {
  setContent: SetQRContent;
}

export interface Tab {
  name: string;
  description: string;
  Component: ComponentType<TabProps>;
}

export type Tabs = Tab[];
