import React, { useState } from 'react';
import { useRouter } from 'next/router';
import IconList from './ui-parts/iconlist';

const PostModal: React.FC = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
        router.push(router.pathname, router.asPath, { shallow: true });
    };

    const handleClose = () => {
        setIsOpen(false);
        router.push(router.pathname, router.asPath, { shallow: true });
    };

    return (
        <div>
            {isOpen && (
                <div>
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex">
                            {[...Array(3)].map((_, j) => (
                                <IconList key={j} src={`icon_${i}_${j}`} alt={`icon_${i}_${j}`} />
                            ))}
                        </div>
                    ))}
                    <button onClick={handleClose}>Close</button>
                </div>
            )}
            {!isOpen && <button onClick={handleOpen}>Open</button>}
        </div>
    );
};

export default PostModal;

