import React, { useEffect, useState } from 'react'
import io from 'socket.io-client';

export const serverRoute = 'http://localhost:8080'
// export const serverRoute = 'https://api.sds-pnu.net/';

export const socket = io(serverRoute);
const Main = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setIsVisible(scrollTop > 300); 
    };
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    };
 
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

 

    return (
        <div></div>
    )
}

export default Main
