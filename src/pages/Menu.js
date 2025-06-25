import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


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
          price: 100,
          image: "https://images.pexels.com/photos/27039850/pexels-photo-27039850.jpeg"
        },
        {
          id: 2,
          name: "Chai Normal",
          description: "This just normal tea ",
          price: 50,
          image: "https://images.pexels.com/photos/32695948/pexels-photo-32695948.jpeg"
        },
        {
          id: 3,
          name: "coffee white",
          description: "this is cool cofee",
          price: 70,
          image: "https://images.pexels.com/photos/814264/pexels-photo-814264.jpeg"
        },
         {
          id: 4,
          name: "black coffee",
          description: "Coffs Harbour, NSW, Australia",
          price: 50,
          image: "https://images.pexels.com/photos/1251083/pexels-photo-1251083.jpeg"
        },
          {
          id: 5,
          name: "Hot milk",
          description: "sweet heated fresh milk",
          price: 100,
          image: "https://images.pexels.com/photos/32672488/pexels-photo-32672488.jpeg"
        },
           {
          id: 6,
          name: "chocolate",
          description: "sweet heated fresh ",
          price: 70,
          image: "https://images.pexels.com/photos/3808243/pexels-photo-3808243.jpeg",
          variants: [
            { type: "Hot chocolate", price: 100 },
            { type:  "white chocolate", price: 100 },
           
          ]
        },
          {
          id: 8,
          name: "milo",
          description: "sweet heated fresh milk",
          price: 70,
          image: "https://images.pexels.com/photos/32704385/pexels-photo-32704385.jpeg"
        },
          {
          id: 9,
          name: "Ujipower",
          description: "energetic uji",
          price: 200,
          image: "https://images.pexels.com/photos/4974543/pexels-photo-4974543.jpeg",
          variants: [
            { type: "Uji brown M / L", price: 100 },
            { type:  "Ujipower brown L/M", price: 100 },
           
          ]
        },
      
      
        {
          id: 4,
          name: "Fish Full with Ugali",
          description: "Signature fish portion with your choice of ugali (white/brown/fufu)",
          price: 450,
          image: "https://images.pexels.com/photos/5041491/pexels-photo-5041491.jpeg",
          variants: [
            { type: "White Ugali", price: 450 },
            { type: "Brown Ugali", price: 470 },
            { type: "Fufu", price: 500 }
          ]
        },
        {
          id: 5,
          name: "Fish half with Ugali",
          description: "Premium fish portion with your choice of ugali (white/brown/fufu)",
          price: 550,
          image: "https://images.pexels.com/photos/5364082/pexels-photo-5364082.jpeg",
          variants: [
            { type: "White Ugali", price: 300 },
            { type: "Brown Ugali", price: 370 },
            { type: "Fufu", price: 400 }
          ]
        },
        {
          id: 6,
          name: "Fish Fillet with Ugali",
          description: "Boneless fish fillet with your choice of ugali (white/brown/fufu)",
          price: 450,
          image: "https://images.pexels.com/photos/29307638/pexels-photo-29307638.jpeg",
          variants: [
            { type: "White Ugali", price: 450 },
            { type: "Brown Ugali", price: 470 },
            { type: "Fufu", price: 500 }
          ]
        },
        {
          id: 7,
          name: "Beef with Ugali",
          description: "Tender beef served with your choice of ugali (white/brown/fufu)",
          price: 300,
          image: "https://images.pexels.com/photos/28902895/pexels-photo-28902895.jpeg",
          variants: [
            { type: "White Ugali", price: 300 },
            { type: "Brown Ugali", price: 320 },
            { type: "Beef rice", price: 350 },
            { type: "Beef mukimo", price: 350 },
            { type: "Beef matoke", price: 350 },
            { type: "Beef pilau", price: 350 },
            { type: "Fufu", price: 350 }
          ]
        },
        {
          id: 7,
          name: "Matumbo special Ugali",
          description: "Tender beef served with your choice of ugali (white/brown/fufu)",
          price: 300,
          image: "https://images.pexels.com/photos/28902895/pexels-photo-28902895.jpeg",
          variants: [
            { type: "White Ugali", price: 250 },
            { type: "Brown Ugali", price: 270 },
            { type: "Matumbo rice", price: 250 },
            { type: "Matumbo chapo", price: 210 },
            { type: "Matumbo mukimo", price: 250 },
            { type: "Beef pilau", price: 350 },
            { type: "Fufu", price: 300 }
          ]
        },
      
      
       
        {
          id: 9,
          name: "Nile Perch with Ugali",
          description: "Premium Nile perch served with your choice of ugali (white/brown/fufu)",
          price: 500,
          image: "https://images.pexels.com/photos/29721165/pexels-photo-29721165.jpeg",
          variants: [
            { type: "White Ugali", price: 500 },
            { type: "Brown Ugali", price: 590 },
            { type: "Fufu", price: 540 }
          ]
        },
        {
          id: 10,
          name: "Beef Pilau",
          description: "Fragrant rice cooked with tender beef and spices",
          price: 450,
          image: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg"
        },
        {
          id: 11,
          name: "Matumbo Special",
          description: "Seasoned tripe served with your choice of ugali (white/brown/fufu)",
          price: 250,
          image: "https://images.pexels.com/photos/4198344/pexels-photo-4198344.jpeg",
          variants: [
            { type: "White Ugali", price: 250 },
            { type: "Brown Ugali", price: 270 },
            { type: "Fufu", price: 300 }
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