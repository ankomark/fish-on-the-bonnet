import React, { useState, useEffect } from 'react';


function Home() {
  const [currentDishIndex, setCurrentDishIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);

  const dishes = [
    { name: "Grilled Salmon", image: "https://images.pexels.com/photos/30882832/pexels-photo-30882832.jpeg" },
    { name: "Crispy Fish & Chips", image: "https://images.pexels.com/photos/19034923/pexels-photo-19034923.jpeg" },
    { name: "Seafood Platter", image: "https://images.pexels.com/photos/19725450/pexels-photo-19725450.jpeg" },
    { name: "Lobster Thermidor", image: "https://images.pexels.com/photos/4198344/pexels-photo-4198344.jpeg" },
    { name: "Sushi Selection", image: "https://images.pexels.com/photos/5638544/pexels-photo-5638544.jpeg" }
  ];

  const backgroundImages = [
    "https://images.pexels.com/photos/1123250/pexels-photo-1123250.jpeg",
    "https://images.pexels.com/photos/2966196/pexels-photo-2966196.jpeg",
    "https://images.pexels.com/photos/13915043/pexels-photo-13915043.jpeg",
    "https://images.pexels.com/photos/30325818/pexels-photo-30325818.jpeg",
    'https://images.pexels.com/photos/30882832/pexels-photo-30882832.jpeg',
    'https://images.pexels.com/photos/32154819/pexels-photo-32154819.jpeg',
    'https://images.pexels.com/photos/5638544/pexels-photo-5638544.jpeg',
    'https://images.pexels.com/photos/8250724/pexels-photo-8250724.jpeg',
    'https://images.pexels.com/photos/4206592/pexels-photo-4206592.jpeg',
    
    'https://images.pexels.com/photos/2232433/pexels-photo-2232433.jpeg',
  ];

  // Preload images
  useEffect(() => {
    const preloadImages = [...backgroundImages, ...dishes.map(dish => dish.image)];
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
    setBgLoaded(true);
  }, []);

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

  // Rotate background image every 8 seconds
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBgIndex(prev => (prev + 1) % backgroundImages.length);
    }, 8000);

    return () => clearInterval(bgInterval);
  }, [backgroundImages.length]);

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
        <h1 className="home-title">Welcome to Fish on the Bonnet</h1>
        <p className="home-subtitle">Experience the finest selection of fish dishes from every corner of the globe.</p>
        
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
                    onClick={() => {
                      setCurrentDishIndex(index);
                      setIsAnimating(false);
                    }}
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
      
      {/* Floating food elements */}
      <div className="floating-elements">
        <div className="floating-element fish"></div>
        <div className="floating-element lemon"></div>
        <div className="floating-element herb"></div>
      </div>
    </section>
  );
}

export default Home;