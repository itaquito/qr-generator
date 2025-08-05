export interface ImageUploadProps {
  onImageSelect: (file: File | null) => void;
  currentImage?: File | null;
  className?: string;
  disabled?: boolean;
}
