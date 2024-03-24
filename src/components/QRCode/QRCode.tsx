'use client';

import type { QRCodeProps } from '@/types/components/QRCode/QRCode';

import { useRef, useEffect } from 'react';
import QR from 'qrcode';

function QRCode({ content }: QRCodeProps) {
  const canvas = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvas.current || content === '') return;

    QR.toCanvas(canvas.current, content, { errorCorrectionLevel: 'low' });
  }, [content]);

  return (
    <div className='rounded bg-white p-2 shadow'>
      {content !== '' ? (
        <canvas title='Preview of the QR code' ref={canvas} />
      ) : (
        <div className='flex h-[116px] w-[116px] items-center justify-center rounded bg-primary text-center font-bold text-white shadow'>
          Your QR code will show here
        </div>
      )}
    </div>
  );
}

export default QRCode;
