import React from 'react';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center gap-3 items-center mt-5'>
           <img className='w-[350px]' src={logo} alt="" />
           <p>Journalism Without Fear or Favour</p>
           <button className='btn btn-primary'>check</button>
        </div>
    );
};

export default Header;