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
        <Link href={`/post/${url}`}>
            <Image src={src} alt={alt} width={100} height={100} />
            <p className='text-center mt-2'>{alt}</p>
        </Link>
    );
};

export default IconList;