'use client'

import { useEffect, useState } from 'react';

export default function GoTop(){
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    function goTop(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {
                showTopBtn && (<button className='fixed bottom-4 right-4 p-2 rounded-full bg-green-700 text-white hover:bg-green-600 shadow-lg transition-opacity duration-300' onClick={goTop}>⬆</button>)
            }
        </>
    )
}