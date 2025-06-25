import React, { useState, useEffect } from 'react';
import Judith from '../images/judith.jpeg'

const aboutImages = [
  {
    id: 'chef',
    src: 'https://images.pexels.com/photos/6872185/pexels-photo-6872185.jpeg',
    alt: 'Chef preparing seafood',
    caption: 'Our chefs bring passion to every dish.',
  },
  {
    id: 'catch',
    src: 'https://images.pexels.com/photos/128865/pexels-photo-128865.jpeg',
    alt: 'Fresh catch of the day',
    caption: 'Sustainably sourced, fresh daily.',
  },
  {
    id: 'dining',
    src: 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg',
    alt: 'Cozy dining area',
    caption: 'A warm and inviting atmosphere.',
  },
];

const teamMembers = [
  {
    id: 1,
    name: 'Chef Moria Okoth',
    role: 'Head Chef',
    bio: 'With 20 years of experience, Maria crafts seafood dishes inspired by coastal traditions.',
    image: 'https://images.pexels.com/photos/7447288/pexels-photo-7447288.jpeg',
  },
  {
    id: 2,
    name: 'Samuel Ndungu',
    role: 'Sous Chef',
    bio: 'Samuel\'s innovative techniques elevate our menu with bold flavors.',
    image: 'https://images.pexels.com/photos/12642132/pexels-photo-12642132.jpeg',
  },
  {
    id: 3,
    name: 'Elizabeth',
    role: 'Manager',
    bio: 'Elizabeth ensures every guest leaves with a smile and a memorable experience.',
    image: Judith,
  },
];

function About() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [imageStatus, setImageStatus] = useState({});

  // Preload images
  useEffect(() => {
    const imageUrls = [...aboutImages.map(item => item.src), ...teamMembers.map(member => member.image)];
    const preloadImages = imageUrls.map(src => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setImageStatus(prev => ({ ...prev, [src]: 'loaded' }));
          resolve();
        };
        img.onerror = () => {
          setImageStatus(prev => ({ ...prev, [src]: 'error' }));
          resolve();
        };
      });
    });

    Promise.all(preloadImages).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About Fish On the Bonnet</h2>
          <p className="about-subtitle">Where passion meets the ocean's bounty</p>
        </div>

        {!imagesLoaded && (
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        )}

        <div className={`about-content ${imagesLoaded ? 'loaded' : ''}`}>
          <div className="about-story">
            <div className="story-text">
              <h3 className="section-title">Our Story</h3>
              <p className="section-text">
                Founded in 2015, Fish on the Bonnet is a celebration of seafood, inspired by the vibrant coastal cultures of East Africa and beyond. Our mission is to serve fresh, sustainably sourced dishes that delight the senses, crafted with passion and care.
              </p>
              <p className="section-text">
                From our signature grilled Nile perch to our innovative fish fillet creations, every plate tells a story of tradition and flavor. Nestled in the heart of the city, our restaurant offers a warm, inviting atmosphere where friends and families gather to share meals and memories.
              </p>
            </div>
            <div className="story-highlight">
              <div className="highlight-card">
                <h4>2015</h4>
                <p>Year Established</p>
              </div>
              <div className="highlight-card">
                <h4>100%</h4>
                <p>Sustainably Sourced</p>
              </div>
              <div className="highlight-card">
                <h4>50+</h4>
                <p>Signature Dishes</p>
              </div>
            </div>
          </div>

          <div className="about-gallery">
            <h3 className="section-title">Our Restaurant</h3>
            <div className="gallery-grid">
              {aboutImages.map(image => (
                <div key={image.id} className="gallery-item">
                  <div className={`image-container ${imageStatus[image.src] === 'error' ? 'image-error' : ''}`}>
                    <img
                      src={imageStatus[image.src] === 'error' ? 'https://via.placeholder.com/300x200?text=Image+Unavailable' : image.src}
                      alt={image.alt}
                      className="gallery-image"
                      loading="lazy"
                    />
                    <div className="image-overlay"></div>
                  </div>
                  <p className="image-caption">{image.caption}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-team">
            <h3 className="section-title">Meet Our Team</h3>
            <p className="section-subtitle">The talented individuals behind your dining experience</p>
            <div className="team-grid">
              {teamMembers.map(member => (
                <div key={member.id} className="team-card">
                  <div className={`image-container ${imageStatus[member.image] === 'error' ? 'image-error' : ''}`}>
                    <img
                      src={imageStatus[member.image] === 'error' ? 'https://via.placeholder.com/300x200?text=Image+Unavailable' : member.image}
                      alt={member.name}
                      className="team-image"
                      loading="lazy"
                    />
                    <div className="team-overlay"></div>
                  </div>
                  <div className="team-info">
                    <h4 className="team-name">{member.name}</h4>
                    <p className="team-role">{member.role}</p>
                    <div className="team-divider"></div>
                    <p className="team-bio">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;