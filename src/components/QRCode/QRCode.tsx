'use client';

import type { QRCodeProps } from '@/types/components/QRCode/QRCode';

import { useRef, useEffect, useState } from 'react';
import QR from 'qrcode';
import PrimaryButton from '../Button/PrimaryButton';

function QRCode({ content, parameters }: QRCodeProps) {
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateQRWithImage = async (
    canvas: HTMLCanvasElement,
    content: string,
    centerImage: File,
    imageSize: number
  ) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Generate QR code first
    await QR.toCanvas(canvas, content, {
      errorCorrectionLevel: 'high', // Always use high for images
      scale: parameters.scale,
      margin: parameters.margin,
      color: {
        dark: parameters.darkColor,
        light: parameters.lightColor,
      },
    });

    // Load and draw the center image
    const img = new Image();
    img.onload = () => {
      const canvasSize = canvas.width;
      const imgSize = (canvasSize * imageSize) / 100;
      const x = (canvasSize - imgSize) / 2;
      const y = (canvasSize - imgSize) / 2;

      // Create a white background circle for the image
      const padding = imgSize * 0.1;
      const circleRadius = (imgSize + padding) / 2;
      
      ctx.fillStyle = parameters.lightColor;
      ctx.beginPath();
      ctx.arc(canvasSize / 2, canvasSize / 2, circleRadius, 0, 2 * Math.PI);
      ctx.fill();

      // Draw the image
      ctx.save();
      
      // Create circular clipping path
      ctx.beginPath();
      ctx.arc(canvasSize / 2, canvasSize / 2, (imgSize - padding) / 2, 0, 2 * Math.PI);
      ctx.clip();

      // Draw the image centered and scaled to fit
      const aspectRatio = img.width / img.height;
      let drawWidth = imgSize - padding;
      let drawHeight = imgSize - padding;
      
      if (aspectRatio > 1) {
        drawHeight = drawWidth / aspectRatio;
      } else {
        drawWidth = drawHeight * aspectRatio;
      }
      
      const drawX = (canvasSize - drawWidth) / 2;
      const drawY = (canvasSize - drawHeight) / 2;
      
      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
      ctx.restore();
    };

    img.src = URL.createObjectURL(centerImage);
  };

  useEffect(() => {
    if (!canvas.current || content === '') return;

    setIsGenerating(true);

    const generateQR = async () => {
      try {
        if (parameters.centerImage) {
          await generateQRWithImage(
            canvas.current!,
            content,
            parameters.centerImage,
            parameters.centerImageSize || 20
          );
        } else {
          await QR.toCanvas(canvas.current!, content, {
            errorCorrectionLevel: parameters.errorCorrectionLevel,
            scale: parameters.scale,
            margin: parameters.margin,
            color: {
              dark: parameters.darkColor,
              light: parameters.lightColor,
            },
          });
        }
      } catch (error) {
        console.error('Error generating QR code:', error);
      } finally {
        setIsGenerating(false);
      }
    };

    generateQR();
  }, [content, parameters]);

  const handlePNGDownload = async () => {
    if (!canvas.current || content === '') return;

    const dataURL = canvas.current.toDataURL('image/png');

    const anchor = document.createElement('a');
    anchor.href = dataURL;
    anchor.download = `qrcode_${new Date().getTime()}.png`;
    anchor.target = '_blank';
    anchor.click();
  };

  const handleSVGDownload = async () => {
    if (!canvas.current || content === '') return;

    try {
      const svg = await QR.toString(content, {
        type: 'svg',
        errorCorrectionLevel: parameters.centerImage ? 'high' : parameters.errorCorrectionLevel,
        scale: parameters.scale,
        margin: parameters.margin,
        color: {
          dark: parameters.darkColor,
          light: parameters.lightColor,
        },
      });

      // Note: SVG export doesn't include center image for now
      // This could be enhanced in the future to embed the image in SVG
      const anchor = document.createElement('a');
      anchor.href = `data:image/svg+xml,${encodeURIComponent(svg)}`;
      anchor.download = `qrcode_${new Date().getTime()}.svg`;
      anchor.target = '_blank';
      anchor.click();
    } catch (error) {
      console.error('Error generating SVG:', error);
    }
  };

  return (
    <div>
      <div className='sticky top-4 space-y-4 rounded bg-white dark:bg-gray-800 p-2 shadow dark:shadow-gray-700'>
        <div className='rounded border-4 border-primary dark:border-indigo-400'>
          {content !== '' ? (
            <div className="relative">
              <canvas title='Preview of the QR code' ref={canvas} />
              {isGenerating && (
                <div className="absolute inset-0 bg-white dark:bg-gray-800 bg-opacity-75 dark:bg-opacity-75 flex items-center justify-center">
                  <div className="text-sm text-gray-600 dark:text-gray-300">Generating...</div>
                </div>
              )}
            </div>
          ) : (
            <div className='flex h-[116px] w-[116px] items-center justify-center p-2 text-center font-bold text-primary dark:text-indigo-400'>
              Your QR code will appear here
            </div>
          )}
        </div>

        <div className='flex flex-col items-center space-y-4'>
          <PrimaryButton 
            className='w-full' 
            onClick={handlePNGDownload}
            disabled={content === '' || isGenerating}
          >
            Download as PNG
          </PrimaryButton>

          <PrimaryButton 
            className='w-full' 
            onClick={handleSVGDownload}
            disabled={content === '' || isGenerating}
          >
            Download as SVG
            {parameters.centerImage && (
              <span className="text-xs block mt-1 text-gray-400 dark:text-gray-500">
                (without center image)
              </span>
            )}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default QRCode;
