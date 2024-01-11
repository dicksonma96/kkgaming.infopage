"use client"
import Image from "next/image";
import Logo from "../../assets/images/logo.png";
import { useRouter } from 'next/navigation'


function Brandlogo({ style, className }) {
  const router = useRouter()
  return (
    <Image
      src={Logo}
      alt="Megah5 Logo"
      className={`logo ${className}`}
      style={style}
      priority
      onClick={()=>router.push('/')}
    />
  );
}

export default Brandlogo;
