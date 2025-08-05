'use client';

// Define the ImageUploadProps type locally if the module does not exist
export interface ImageUploadProps {
  onImageSelect: (file: File | null) => void;
  currentImage?: File | null;
  className?: string;
  disabled?: boolean;
}

import { useRef, useState } from 'react';
import classNames from 'classnames';

function ImageUpload({ 
  onImageSelect, 
  currentImage, 
  className,
  disabled = false 
}: ImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageSelect = (file: File) => {
    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Image size must be less than 5MB');
      return;
    }

    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    
    onImageSelect(file);
  };

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleImageSelect(file);
    }
  };

  const handleDrag = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === 'dragenter' || event.type === 'dragover') {
      setDragActive(true);
    } else if (event.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);

    if (disabled) return;

    const file = event.dataTransfer.files?.[0];
    if (file) {
      handleImageSelect(file);
    }
  };

  const handleClick = () => {
    if (!disabled) {
      fileInputRef.current?.click();
    }
  };

  const handleRemoveImage = (event: React.MouseEvent) => {
    event.stopPropagation();
    setPreviewUrl(null);
    onImageSelect(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const displayUrl = previewUrl || (currentImage ? URL.createObjectURL(currentImage) : null);

  return (
    <div className={classNames('space-y-2', className)}>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Center Image
        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">(Optional)</span>
      </label>
      
      <div
        className={classNames(
          'relative border-2 border-dashed rounded-lg p-4 transition-colors cursor-pointer',
          {
            'border-blue-400 bg-blue-50 dark:border-blue-500 dark:bg-blue-900/20': dragActive && !disabled,
            'border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500 bg-white dark:bg-gray-800': !dragActive && !disabled,
            'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-700 cursor-not-allowed': disabled,
          }
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
          disabled={disabled}
        />

        {displayUrl ? (
          <div className="relative">
            <img
              src={displayUrl}
              alt="Center image preview"
              className="w-full h-32 object-contain rounded"
            />
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
              disabled={disabled}
            >
              ×
            </button>
          </div>
        ) : (
          <div className="text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="mt-2">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {disabled ? 'Image upload disabled' : 'Click to upload or drag and drop'}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                PNG, JPG, GIF up to 5MB
              </p>
            </div>
          </div>
        )}
      </div>

      {displayUrl && (
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Note: Adding a center image automatically sets error correction to High (30%) for better reliability.
        </p>
      )}
    </div>
  );
}

export default ImageUpload;
