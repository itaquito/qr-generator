'use client';

import type { ImageSizeProps } from '../../types/components/Parameter/ImageSize';
import type { Parameters } from '@/types/components/Parameter/Parameter';

import classNames from 'classnames';

function ImageSize({ parameters, setParameters, className }: ImageSizeProps) {
  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const size = parseInt(event.target.value);
    setParameters((prev: Parameters) => ({
      ...prev,
      centerImageSize: size,
    }));
  };

  return (
    <div className={classNames('space-y-2', className)}>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Image Size
        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
          ({parameters.centerImageSize || 20}% of QR)
        </span>
      </label>
      
      <div className="space-y-2">
        <input
          type="range"
          min="10"
          max="30"
          value={parameters.centerImageSize || 20}
          onChange={handleSizeChange}
          className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
          disabled={!parameters.centerImage}
        />
        
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>10%</span>
          <span>20%</span>
          <span>30%</span>
        </div>
      </div>
      
      <p className="text-xs text-gray-500 dark:text-gray-400">
        Recommended: 15-25% for optimal scanning reliability
      </p>
    </div>
  );
}

export default ImageSize;
