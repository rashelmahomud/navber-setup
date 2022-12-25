import React from 'react';

const Button = (props) => {
    return (
        <button className='bg-indigo-500 text-white font-[poppins] py-2 px-6 rounded lg:ml-8 hover:bg-red-200'>{props.children}</button>
    );
};

export default Button;