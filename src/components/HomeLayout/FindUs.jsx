import React from 'react';
import { FaFacebookF, FaInstagramSquare, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='my-4'>
            <h2 className='font-bold mb-4'>Find Us ON</h2>
            <div className="join join-vertical w-full ">
                <button className="btn join-item justify-start bg-base-100 text-accent">
                    <FaFacebookF /> FaceBook
                </button>
                <button className="btn join-item justify-start bg-base-100  text-accent">
                   <FaTwitter /> Twitter
                </button>
                <button className="btn join-item justify-start bg-base-100  text-accent">
                    <FaInstagramSquare/>Instagram
                </button>
            </div>
        </div>
    );
};

export default FindUs;