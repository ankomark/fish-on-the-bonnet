import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand, FaCompress } from 'react-icons/fa';
import Matumbo from '../images/matumbo.jpeg'
import Ro from '../images/ro.jpeg'
import Tilapia from '../images/tilapia.jpg'
import Ta from '../images/ta.jpeg'
import Rech from '../images/rech.jpg'
import Uji from '../images/uji.jpeg'
import Tea3 from '../images/tea3.jpg'
import Tea2 from '../images/tea2.jpg'
import White from '../images/white.jpg'
import Black from '../images/black.jpg'
import Milo from '../images/milo.jpg'

import Bonet from '../images/bonet.jpg'
import Waa from '../images/waa.jpg'
import Interia from '../images/interia.jpg'
import Chef from '../images/chef.jpeg'
import Rabuon from '../images/rabuon.jpeg'
import Head2 from '../images/head2.jpeg'
import Waita from '../images/waita.jpeg'
import Ae from '../images/ae.jpeg'
import Ai from '../images/ai.jpeg'
import Aliya from '../images/aliya.jpeg'
import As from '../images/as.jpeg'
import At from '../images/at.jpeg'
import Kie from '../images/kie.jpeg'
import Omena from '../images/omena.jpeg'
import Power from '../images/power.jpeg'
import Saa from '../images/saa.jpeg'
import Samo from '../images/samo.jpeg'
import Tam from '../images/tam.jpeg'
import Uge from '../images/uge.jpeg'


function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Wrap images array in useMemo to prevent recreation on every render
  const images = useMemo(() => [
    Milo,
    Tilapia,
    Black,
    Uge,
    Tam,
    Samo,
    Saa,
    Power,
    Omena,
    Kie,
    Tea2,
    Uji,
    Rech,
    White,
    Ta,
    Ro,
    Matumbo,
    Tea3,
    At,
    As,
    Aliya,
    Ai,
    Ae,
    Head2,
    Rabuon,
    Waita,
    Waa,
    Chef,
    Interia,
    Bonet,

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