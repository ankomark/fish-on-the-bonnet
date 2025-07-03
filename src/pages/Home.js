// 
import Tilapia from '../images/tilapia.jpg'
import Ti from '../images/ti.jpeg'
import Rech from '../images/rech.jpg'
import Matumbo from '../images/matumbo.jpeg'

import React, { useState, useEffect, useCallback } from 'react';


function Home() {
  const [currentDishIndex, setCurrentDishIndex] = useState(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);

  const dishes = [
    { name: "Tilapia", image: Tilapia },
    { name: "Crispy Fish & Chips", image: "https://images.pexels.com/photos/19034923/pexels-photo-19034923.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { name: "Nile peach", image: Rech },
    { name: "Matumbo", image: Matumbo },
    { name: "Chicken", image: Ti }
  ];

  const backgroundImages = [
    "https://images.pexels.com/photos/1123250/pexels-photo-1123250.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2966196/pexels-photo-2966196.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/13915043/pexels-photo-13915043.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/30325818/pexels-photo-30325818.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/30882832/pexels-photo-30882832.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/32154819/pexels-photo-32154819.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/5638544/pexels-photo-5638544.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/8250724/pexels-photo-8250724.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/4206592/pexels-photo-4206592.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2232433/pexels-photo-2232433.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  // Memoized preload function
  const preloadImages = useCallback(() => {
    const allImages = [...backgroundImages, ...dishes.map(dish => dish.image)];
    const imagePromises = allImages.map(src => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve; // Resolve even on error to avoid blocking
      });
    });

    Promise.all(imagePromises).then(() => {
      setBgLoaded(true);
    });
  }, [backgroundImages, dishes]);

  // Preload images on mount
  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  // Rotate featured dish every 5 seconds
  useEffect(() => {
    const dishInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentDishIndex(prev => (prev + 1) % dishes.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(dishInterval);
  }, [dishes.length]);

  // Rotate background image every 3 seconds
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBgIndex(prev => (prev + 1) % backgroundImages.length);
    }, 3000); // Changed to 3 seconds as per request

    return () => clearInterval(bgInterval);
  }, [backgroundImages.length]);

  // Handle manual dish selection
  const handleDishSelect = useCallback((index) => {
    setCurrentDishIndex(index);
    setIsAnimating(false);
  }, []);

  return (
    <section className={`home-hero ${bgLoaded ? 'loaded' : ''}`}>
      {/* Background with smooth crossfade */}
      <div className="background-container">
        {backgroundImages.map((img, index) => (
          <div 
            key={img}
            className={`background-slide ${index === currentBgIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
      
      <div className="home-content">
        <h1 className="home-title">Welcome to Fish On The Bonnet</h1>
        <p className="home-subtitle">Savor the Finest Global Fish Dishes</p>
        
        {/* Featured dish with refined animation */}
        <div className="featured-dish-container">
          <div className={`featured-dish ${isAnimating ? 'animating' : ''}`}>
            <div className="dish-image-container">
              {dishes.map((dish, index) => (
                <img
                  key={dish.image}
                  src={dish.image}
                  alt={dish.name}
                  className={`dish-image ${index === currentDishIndex ? 'active' : ''}`}
                  loading="lazy"
                />
              ))}
            </div>
            <div className="dish-info">
              <h3 className="dish-name">{dishes[currentDishIndex].name}</h3>
              <div className="dish-dots">
                {dishes.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentDishIndex ? 'active' : ''}`}
                    onClick={() => handleDishSelect(index)}
                    aria-label={`Show ${dishes[index].name}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="cta-container">
          <a href="/menu" className="home-cta">Explore Menu</a>
          <a href="/reservations" className="home-cta secondary">Book a Table</a>
        </div>
      </div>
    </section>
  );
}

export default Home;