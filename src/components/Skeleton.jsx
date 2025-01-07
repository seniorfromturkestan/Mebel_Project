import React, { useState } from 'react';

const Skeleton = ({ src, alt, className, skeletonClassName }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative">
      {!isLoaded && (
        <div
          className={`bg-gray-200 animate-pulse absolute inset-0 ${skeletonClassName}`}
        ></div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${!isLoaded ? 'invisible' : ''}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default Skeleton;
