import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useTransform, useScroll } from 'framer-motion';
import '../../styles/App.css';
import prevSvg from '../../assets/previous.svg';
import nextSvg from '../../assets/next.svg'; // Corrected import

const images = [
    '/images/product_1.jpg',
    '/images/product_2.jpg',
    '/images/product_3.jpg',
];

const Product: React.FC = () => {
    const [index, setIndex] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    });
    const width = useTransform(scrollYProgress, [0, 1], ['100%', '60%']);

    const nextImage = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <>
            <h1 className="container title-heading-product">Products</h1>
            <div ref={ref} className="carousel-wrapper">
                <motion.div className="carousel-container" style={{ width }}>
                    <AnimatePresence>
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="carousel-image"
                        >
                            <img src={images[index]} alt={`Product ${index + 1}`} />
                        </motion.div>
                    </AnimatePresence>
                    <motion.button
                        onClick={prevImage}
                        className="carousel-button prev"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img src={prevSvg} alt="Previous" />
                    </motion.button>
                    <motion.button
                        onClick={nextImage}
                        className="carousel-button next"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img src={nextSvg} alt="Next" />
                    </motion.button>
                </motion.div>
            </div>
        </>
    );
};

export default Product;
