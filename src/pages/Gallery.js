import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand, FaCompress } from 'react-icons/fa';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Wrap images array in useMemo to prevent recreation on every render
  const images = useMemo(() => [
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&auto=format&fit=crop',
    // Main Courses
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop',
    // Seafood
    'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1563379926898-05fcd5b90859?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop',
    // Desserts
    'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop',
    // Drinks
    'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&auto=format&fit=crop',
    // Special Dishes
    'https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop'
  ], []); // Empty dependency array means this only runs once

  const openImage = useCallback((src, index) => {
    setSelectedImage(src);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeImage = useCallback(() => {
    setSelectedImage(null);
    setIsFullscreen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const navigate = useCallback((direction) => {
    setCurrentIndex(prevIndex => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) return images.length - 1;
      if (newIndex >= images.length) return 0;
      return newIndex;
    });
  }, [images.length]);

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(prev => !prev);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === 'Escape') closeImage();
        if (e.key === 'ArrowLeft') navigate(-1);
        if (e.key === 'ArrowRight') navigate(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, navigate, closeImage]);

  useEffect(() => {
    if (selectedImage) {
      setSelectedImage(images[currentIndex]);
    }
  }, [currentIndex, images, selectedImage]);

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        <h2 className="gallery-title">Our Culinary Creations</h2>
        <p className="gallery-subtitle">Explore our delicious dishes</p>
        
        <div className="gallery-grid">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="gallery-item" 
              onClick={() => openImage(src, index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openImage(src, index)}
            >
              <img 
                src={src} 
                alt={`Culinary creation ${index + 1}`} 
                className="gallery-image" 
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-view-text">View</span>
              </div>
            </div>
          ))}
        </div>
        
        {selectedImage && (
          <div 
            className={`gallery-modal ${isFullscreen ? 'fullscreen' : ''}`}
            onClick={closeImage}
          >
            <div 
              className="gallery-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={closeImage}>
                <FaTimes />
              </button>
              
              <img 
                src={selectedImage} 
                alt="Selected dish" 
                className="gallery-modal-image" 
              />
              
              <button 
                className="modal-nav-btn prev-btn" 
                onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              >
                <FaChevronLeft />
              </button>
              
              <button 
                className="modal-nav-btn next-btn" 
                onClick={(e) => { e.stopPropagation(); navigate(1); }}
              >
                <FaChevronRight />
              </button>
              
              <button 
                className="modal-fullscreen-btn" 
                onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}
              >
                {isFullscreen ? <FaCompress /> : <FaExpand />}
              </button>
              
              <div className="image-counter">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;