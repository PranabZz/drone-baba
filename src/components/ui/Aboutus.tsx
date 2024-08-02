// src/components/MediaContainer.tsx

import React from 'react';

const Aboutus: React.FC = () => {
    return (
        <>
            <div className="container about-description">
                Lorem ipsum dolor sit amet, <span className="light-text"> consectetur adipisicing elit </span>. Distinctio laborum qui animi repudiandae impedit aut harum deleniti, necessitatibus ad aperiam voluptatum dicta reprehenderit repellat soluta, <span className="light-text">sunt ducimus quaerat quidem? </span> Quibusdam veritatis consectetur minus tempora molestias fugit maiores quod dolor, blanditiis corporis quas quia rerum debitis.
            </div>
            <section className="about-section">
                <div className="about-image">
                    <h1 className="section-title">How our drones fly better.</h1><br></br>
                    <img
                        src="https://via.placeholder.com/1200X1800" // Replace with your long image URL
                        alt="About Us"
                        className="about-img"
                    />
                    <p className="image-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rerum sunt, beatae delectus doloribus laboriosam repudiandae nobis neque ipsam voluptatibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, ea.</p>
                </div>
                <div className="about-video">
                    <h1 className="section-sub-title">Checkout some of the videos, here are some amazing isn't it?</h1><br></br>
                    <video
                        controls
                        className="about-vid"
                        src="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your video URL
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>
        </>

    );
};

export default Aboutus;
