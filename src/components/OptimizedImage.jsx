function OptimizedImage({ src, alt, className }) {
  return (
    <div className="image-container">
      <img
        src={src}
        alt={alt}
        className={`optimized-image ${className || ''}`}
        loading="lazy"
      />
    </div>
  );
}

export default OptimizedImage; 