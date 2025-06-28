import React from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  loading?: 'lazy' | 'eager';
  className?: string;
}

/**
 * OptimizedImage centralizes best practices for images:
 * - Always sets width/height for CLS
 * - Defaults to lazy loading
 * - Can be extended for CDN, WebP, or placeholders
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  className = '',
  ...rest
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      className={className}
      {...rest}
    />
  );
};

export default OptimizedImage;
