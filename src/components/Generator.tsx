'use client';

import type { QRContent } from '@/types/components/QRCode/QRCode';

import { useState } from 'react';

import Tabs from './Tabs/TabViewer';
import QRCode from './QRCode/QRCode';

function Generator() {
  const [content, setContent] = useState<QRContent>('');

  return (
    <div className='flex w-full space-x-4'>
      <Tabs setContent={setContent} />
      <QRCode content={content} />
    </div>
  );
}

export default Generator;
