import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='md:w-4/12 mx-auto text-center'>
            <h2 className='text-2xl uppercase '>{heading}</h2>
            <h5 className='text-orange-600'>---{subHeading}---</h5>
        </div>
    );
};

export default SectionTitle;