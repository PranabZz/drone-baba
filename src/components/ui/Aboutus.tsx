// src/components/MediaContainer.tsx

import React from 'react';

const Aboutus: React.FC = () => {
    return (
        <>
            <div className="container about-description">
                Lorem ipsum dolor sit amet, <span className="light-text"> consectetur adipisicing elit </span>. Distinctio laborum qui animi repudiandae impedit aut harum deleniti, necessitatibus ad aperiam voluptatum dicta reprehenderit repellat soluta, <span className="light-text">sunt ducimus quaerat quidem? </span> Quibusdam veritatis consectetur minus tempora molestias fugit maiores quod dolor, blanditiis corporis quas quia rerum debitis.
            </div>
            <section className="section-container about-section">
                <div className="about-image">
                    <h1 className="section-title">How our drones fly better.</h1><br></br>
                    <video
                        className="about-vid"
                        src="/videos/video_2.mp4"
                        autoPlay={true}
                        loop
                        muted
                        autoFocus
                    >
                        This browser does not support the video tag.
                    </video>
                    <p className="image-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rerum sunt, beatae delectus doloribus laboriosam repudiandae nobis neque ipsam voluptatibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, ea.</p>
                </div>
                <div className="about-video">
                    <h1 className="section-sub-title">Checkout some of the videos, here are some amazing isn't it?</h1><br></br>
                    <video
                        className="about-vid"
                        src="/videos/video_1.mp4"
                        autoPlay={true}
                        loop
                        muted
                        autoFocus
                    >
                        This browser does not support the video tag.
                    </video>
                    <div className="image-desc">
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rerum sunt, beatae delectus doloribus laboriosam repudiandae nobis neque ipsam voluptatibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, ea.</p>
                        <br />
                        <h1><b>Title</b></h1>
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rerum sunt, beatae delectus doloribus laboriosam repudiandae nobis neque ipsam voluptatibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, ea.</p>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Aboutus;
