import type { Dispatch, SetStateAction } from 'react';

import type { Parameters } from '../Parameter/Parameter';

export type QRContent = string;

export type SetQRContent = Dispatch<SetStateAction<QRContent>>;

export interface QRCodeProps {
  content: QRContent;
  parameters: Parameters;
}
