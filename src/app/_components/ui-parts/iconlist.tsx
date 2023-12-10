"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface IconListProps {
    src: string;
    alt: string;
    url: string;
}

const IconList: React.FC<IconListProps> = ({ src, alt,url }) => {
    return (
        <div className='inline-block'>
            <Link href={`/post/${url}`} className='inline-block'>
                <Image src={src} alt={alt} width={100} height={100} className='inline-block'/>
                <p className='text-center mt-2'>{alt}</p>
            </Link>
        </div>
    );
};

export default IconList;