import React, { useState, useEffect } from 'react';
import Judith1 from '../images/judith1.jpeg';
import Bonet from '../images/bonet.jpg'
import Waa from '../images/waa.jpg'
import Interia from '../images/interia.jpg'
import Chef from '../images/chef.jpeg'
import Head1 from '../images/head1.jpeg'
import Head2 from '../images/head2.jpeg'
import Waita from '../images/waita.jpeg'

// Optimized image URLs with size parameters
const aboutImages = [
  {
    id: 'chef',
    src: Bonet,
    alt: 'Chef preparing seafood',
    caption: 'Our chefs bring passion to every dish.',
  },
  {
    id: 'catch',
    src: Waa,
    alt: 'Fresh catch of the day',
    caption: 'Sustainably sourced, fresh daily.',
  },
  {
    id: 'dining',
    src: Interia,
    alt: 'Cozy dining area',
    caption: 'A warm and inviting atmosphere.',
  },
];

const teamMembers = [
   {
    id: 1,
    name: 'Elizabeth',
    role: 'CEO',
    bio: 'Elizabeth ensures every thing runs as normal and uptodate',
    image: Judith1,
  },
  {
    id: 2,
    name: 'Silas',
    role: 'Manager',
    bio: 'Silas ensures every guest leaves with a smile and a memorable experience.',
    image: Head1,
  },
 
  {
    id: 3,
    name: 'Chef David',
    role: 'Sous Chef',
    bio: 'David\'s innovative techniques elevate our menu with bold flavors.',
    image: Chef,
  },
   {
    id: 4,
    name: 'Chef Kevin',
    role: 'Sous Chef',
    bio: 'Kevin\'s innovative techniques elevate our menu with bold flavors.',
    image: Head2,
  },
  
  {
    id: 5,
    name: 'Diana, Meisy and Eliza',
    role: 'Waitresses',
    bio: 'They ensure proper customer expirience and fast service',
    image: Waita,
  },
];

function About() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [imageStatus, setImageStatus] = useState({});

  // Preload images with optimized loading strategy
  useEffect(() => {
    let isMounted = true;
    
    const imageUrls = [
      ...aboutImages.map(item => item.src), 
      ...teamMembers.map(member => member.image)
    ];
    
    const preloadImages = imageUrls.map(src => {
      return new Promise((resolve) => {
        if (src.startsWith('http')) {
          const img = new Image();
          img.src = src;
          img.loading = 'lazy';
          img.onload = () => {
            if (isMounted) {
              setImageStatus(prev => ({ ...prev, [src]: 'loaded' }));
            }
            resolve();
          };
          img.onerror = () => {
            if (isMounted) {
              setImageStatus(prev => ({ ...prev, [src]: 'error' }));
            }
            resolve();
          };
        } else {
          // Local images are assumed to load quickly
          if (isMounted) {
            setImageStatus(prev => ({ ...prev, [src]: 'loaded' }));
          }
          resolve();
        }
      });
    });

    // Set a timeout to show content even if some images fail
    const timeout = setTimeout(() => {
      if (isMounted) {
        setImagesLoaded(true);
      }
    }, 2000); // Max 2 seconds wait time

    Promise.all(preloadImages).then(() => {
      clearTimeout(timeout);
      if (isMounted) {
        setImagesLoaded(true);
      }
    });

    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
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
                Founded in 2015, Fish on the Bonnet is a celebration of african foods, inspired by the vibrant african cultures of East Africa and beyond. Our mission is to serve fresh, sustainably sourced dishes that delight the senses, crafted with passion and care.
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
                      data-loaded={imageStatus[image.src] === 'loaded'}
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
                      data-loaded={imageStatus[member.image] === 'loaded'}
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