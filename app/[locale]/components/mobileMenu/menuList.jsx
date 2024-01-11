import Link from "next-intl/link";
import { useTranslations } from "next-intl";

import main_menu from "../mainNav/main_menu";

function MenuList() {
  const t = useTranslations('main-nav');

  return (
    <div className="menu col">
        {
             main_menu.map((item,index)=><Link key={index} href={item.path}>{t(item.label)}</Link>)
        }                 
    </div>
  )
}

export default MenuList