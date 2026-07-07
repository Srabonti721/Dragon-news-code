import React from 'react';
import FindUs from './FindUs';
import Qzone from './Qzone';
import SocialLogin from './SocialLogin';
import bg from '../../assets/bg.png'

const RightAside = () => {
    return (
        <div>
            <h2 className=' font-bold'>Login with</h2>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzone></Qzone>
            <img className='my-5' src={bg} alt="" />
        </div>
    );
};

export default RightAside;