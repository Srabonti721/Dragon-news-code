import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div className='my-5'>
                        {/* Google */}
            <button className="btn bg-white text-red-400  w-full hover:bg-red-400 hover:text-white">
              <FcGoogle size={20} />
                Login with Google
            </button>
            {/* GitHub */}
            <button className="btn bg-white text-accent my-4 w-full hover:bg-gray-500 hover:text-white">
                <FaGithub  size={20}/>
                Login with GitHub
            </button>
        </div>
    );
};

export default SocialLogin;