import React from 'react';
import Image from 'next/image';

interface IconListProps {
    src: string;
    alt: string;
}

const IconList: React.FC<IconListProps> = ({ src, alt }) => {
    return (
        <div className=''>
            <Image src={src} alt={alt} />
            <p>{alt}</p>
        </div>
    );
};

export default IconList;