"use client"
import './style.scss'
import { useEffect, useState } from 'react'

function HeaderWrapper({children}) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=>{

        const handleScroll = () => {
            if (window.scrollY > 0) {
              setIsScrolled(true);
            } else {
              setIsScrolled(false);
            }
          };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    },[])


  return (
    <div className={`header rowc ${isScrolled && "scrolled_header"} `}>
      <div className="header_content rowc">
        {children}
      </div>
    </div>
  )
}

export default HeaderWrapper