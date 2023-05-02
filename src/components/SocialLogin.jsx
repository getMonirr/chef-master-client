import React from 'react';

const SocialLogin = ({icon,children}) => {
    return (
        <button className='flex justify-center items-center gap-3 border p-2 rounded-md shadow-lg hover:bg-gray-300 hover:shadow-none capitalize'>
            {icon}
            {children}
        </button>
    );
};

export default SocialLogin;