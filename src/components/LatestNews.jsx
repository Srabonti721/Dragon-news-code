import React from 'react';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 py-3 px-3'>
            <p className='btn btn-secondary text-base-100 py-2 px-3'>Latest</p>
            <marquee>
                <div className='flex gap-5 font-bold'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, officia.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, officia.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, officia.</p>
                </div>
            </marquee>
        </div>
    );
};

export default LatestNews;