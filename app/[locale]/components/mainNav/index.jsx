import Link from "next/link";
import { useTranslations } from "next-intl";
import main_menu from "./main_menu";
import ClientWrapper from "./clientWrapper";

function MainNav() {
  const t = useTranslations('main-nav');

 return <ClientWrapper>
  <>
  {
    main_menu.map((item,index)=><Link key={index} href={item.path}>{t(item.label)}</Link>)
  }  
  </>  
</ClientWrapper>   
}

export default MainNav;
