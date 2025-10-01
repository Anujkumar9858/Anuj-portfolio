// src/Services.js
import React from 'react';
import { motion } from 'framer-motion';  // ✅ Framer Motion import

const Services = () => {
    return (
        <>
        <div className="services-container">
            <h1 className="services-header">What I Can Do For You</h1>
            <p className="services-subheader">
                From concept to deployment, I provide comprehensive digital solutions that help businesses grow and succeed in the modern web landscape.
            </p>
            <div className="services-grid">
                
                {/* Card 1 */}
                <motion.div 
                    className="service-card"
                    whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                    <div className="service-icon">💻</div>
                    <h2>Web Development</h2>
                    <h3 style={{color:"#a74a4aff",fontSize:"20px"}}>Full-Stack Solutions</h3>
                    <p>Build modern, scalable web applications using cutting-edge technologies like React, Node.js, and cloud platforms.</p>
                    <p className="price" id='money'>More Details</p>
                </motion.div>

                {/* Card 2 */}
                <motion.div 
                    className="service-card"
                    whileHover={{ rotateY: -10, rotateX: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                    <div className="service-icon">🛒</div>
                    <h2>E-commerce Solution</h2>
                    <h3 style={{color:"#a74a4aff",fontSize:"20px"}}>Online Store Development</h3>
                    <p>Build powerful e-commerce platforms with secure payment processing, inventory management, and analytics.</p>
                    <p className="price" id='money'>More Details</p>
                </motion.div>

                {/* Card 3 */}
                <motion.div 
                    className="service-card"
                    whileHover={{ rotateY: 8, rotateX: -5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                    <div className="service-icon">⚡</div>
                    <h2>Web Optimization</h2>
                    <h3 style={{color:"#a74a4aff",fontSize:"20px"}}>Performance & SEO</h3>
                    <p>Optimize your website for speed, search engines, and user experience to maximize conversions and traffic.</p>
                    <p className="price" id='money' style={{marginTop:"39px"}}>More Details</p>
                </motion.div>

                {/* Card 4 */}
                <motion.div 
                    className="service-card"
                    whileHover={{ rotateY: -8, rotateX: -5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                    <div className="service-icon">🛠️</div>
                    <h2>Website Maintenance</h2>
                    <h3 style={{color:"#a74a4aff",fontSize:"20px"}}>Ongoing Support</h3>
                    <p>Keep your website secure, updated, and running smoothly with regular maintenance and technical support.</p>
                    <p className="price" id='money' style={{marginTop:"37px"}}>More Details</p>
                </motion.div>

            </div>
        </div>
        </>
    );
};

export default Services;
