import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='md:w-4/12 mx-auto text-center mb-10 mt-10'>
            <h2 className='text-2xl uppercase mb-2 '>{heading}</h2>
            <h5 className='text-black font-bold border-y-4 py-4'>---{subHeading}---</h5>
        </div>
    );
};

export default SectionTitle;