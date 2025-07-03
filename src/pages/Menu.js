import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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


const FishOnTheBonnet = () => {
  const menuData = {
    hotelName: "Fish on the Bonnet",
    location: "Nairobi, Kenya",
    menu: {
      menu: [
        {
          id: 1,
          name: "Chai Special",
          description: "This is very special prepared tea",
          price: 150,
          image:Tea3 ,
        },
        {
          id: 2,
          name: "Chai Normal",
          description: "This just normal tea ",
          price: 100,
          image:Tea2 ,
        },
        {
          id: 3,
          name: "Coffee white",
          description: "this is cool cofee",
          price: 120,
          image: White ,
        },
         {
          id: 4,
          name: "Black coffee",
          description: "Coffs Harbour, NSW, Australia",
          price: 100,
          image: Black,
        },
          {
          id: 5,
          name: "Hot milk",
          description: "sweet heated fresh milk",
          price: 150,
          image: "https://images.pexels.com/photos/32672488/pexels-photo-32672488.jpeg"
        },
           {
          id: 6,
          name: "Chocolate",
          description: "sweet heated fresh Chocolate ",
          price: 120,
          image: "https://images.pexels.com/photos/3808243/pexels-photo-3808243.jpeg",
          variants: [
            { type: "Hot chocolate", price: 150 },
            { type:  "white chocolate", price: 150 },
           
          ]
        },
          {
          id: 8,
          name: "Milo",
          description: "sweet heated fresh milk",
          price: 120,
          image:Milo ,
        },
          {
          id: 9,
          name: "Ujipower",
          description: "energetic uji",
          price: 250,
          image: Uji,
          variants: [
            { type: "Uji brown M ", price: 150 },
            { type: "Uji brown  L", price: 200 },
            { type:  "Ujipower  M", price: 150 },
            { type:  "Ujipower  L", price: 250 },
           
          ]
        },
      
      
        {
          id: 10,
          name: "Fish Full with Ugali",
          description: "Signature fish portion with your choice of ugali (white/brown/fufu)",
          price: 500,
          image: Rech,
          variants: [
            { type: "White Ugali", price: 500 },
            { type: "Brown Ugali", price: 520 },
            { type: "Fufu", price: 550 }
          ]
        },
        {
          id: 11,
          name: "Fish half with Ugali",
          description: "Premium fish portion with your choice of ugali (white/brown/fufu)",
          price: 600,
          image: "https://images.pexels.com/photos/5364082/pexels-photo-5364082.jpeg",
          variants: [
            { type: "White Ugali", price: 350 },
            { type: "Brown Ugali", price: 370 },
            { type: "Fufu", price: 400 }
          ]
        },
        {
          id: 12,
          name: "Fish Fillet with Ugali",
          description: "Boneless fish fillet with your choice of ugali (white/brown/fufu)",
          price: 500,
          image: "https://images.pexels.com/photos/29307638/pexels-photo-29307638.jpeg",
          variants: [
            { type: "White Ugali", price: 500 },
            { type: "Brown Ugali", price: 520 },
            { type: "Fufu", price: 550 }
          ]
        },
        {
          id: 13,
          name: "Beef with Ugali",
          description: "Tender beef served with your choice of ugali (white/brown/fufu)",
          price: 400,
          image: Ta,
          variants: [
            { type: "White Ugali", price: 350 },
            { type: "Brown Ugali", price: 370 },
            { type: "Beef rice", price: 400 },
            { type: "Beef mukimo", price: 400 },
            { type: "Beef matoke", price: 500 },
            { type: "Fufu", price: 400 }
          ]
        },
        {
          id: 14,
          name: "Matumbo special Ugali",
          description: "Tender beef served with your choice of ugali (white/brown/fufu)",
          price: 300,
          image: "https://images.pexels.com/photos/28902895/pexels-photo-28902895.jpeg",
          variants: [
            { type: "White Ugali", price: 300 },
            { type: "Brown Ugali", price: 320 },
            { type: "Matumbo rice", price: 300 },
            { type: "Matumbo chapo", price: 260 },
            { type: "Matumbo mukimo", price: 300 },
            { type: "Beef pilau", price: 500 },
            { type: "Fufu", price: 350 }
          ]
        },
        {
          id: 15,
          name: "Nile Perch with Ugali",
          description: "Premium Nile perch served with your choice of ugali (white/brown/fufu)",
          price: 550,
          image: Tilapia,
          variants: [
            { type: "White Ugali", price: 550 },
            { type: "Brown Ugali", price: 630 },
            { type: "Fufu", price: 590 }
          ]
        },
        {
          id: 16,
          name: "Beef Pilau",
          description: "Fragrant rice cooked with tender beef and spices",
          price: 500,
          image: Ro ,
        },
        {
          id: 17,
          name: "Matumbo Special",
          description: "Seasoned tripe served with your choice of ugali (white/brown/fufu)",
          price: 300,
          image: Matumbo,
          variants: [
            { type: "White Ugali", price: 300 },
            { type: "Brown Ugali", price: 320 },
            { type: "Fufu", price: 350 }
          ]
        }
      ]
      
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="menu-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <header className="menu-header">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {menuData.hotelName}
        </motion.h1>
        <motion.p 
          className="tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A pinch of passion in every dish
        </motion.p>
      </header>

      {Object.entries(menuData.menu).map(([mealType, items]) => (
        <section key={mealType} className="meal-section">
          <h2 className="section-title">
            {mealType.split('_').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ')}
          </h2>
          <div className="menu-grid">
            {items.map((item) => (
              <motion.div 
                key={item.id} 
                className="menu-card"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                {item.image && (
                  <div className="image-container">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="food-image"
                      onError={(e) => { 
                        e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available'; 
                      }}
                    />
                    <div className="image-overlay"></div>
                  </div>
                )}
                <div className="card-content">
                  <h3>{item.name}</h3>
                  <p className="description">{item.description}</p>
                  
                  {item.variants ? (
                    <div className="variants">
                      {item.variants.map((variant, index) => (
                        <div key={index} className="variant">
                          <span>{variant.type}</span>
                          <span>KSh {variant.price.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="price">KSh {item.price.toLocaleString()}</p>
                  )}
                  
                  <Link to="/contact" className="order-link">
                    <motion.button 
                      className="order-btn" 
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Add to Order
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ))}
    </motion.div>
  );
};

export default FishOnTheBonnet;