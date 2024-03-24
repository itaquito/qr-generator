import type { Dispatch, SetStateAction } from 'react';

export type QRContent = string;

export type SetQRContent = Dispatch<SetStateAction<QRContent>>;

export interface QRCodeProps {
  content: QRContent;
}
