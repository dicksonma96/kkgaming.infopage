import Link from "next/link";
import { useTranslations } from "next-intl";
import main_menu from "./main_menu";

function MainNav() {
  const t = useTranslations("main-nav");

  return (
    <nav className="mainnav rowc">
      {main_menu.map((item, index) => (
        <Link key={index} href={item.path}>
          {t(item.label)}
        </Link>
      ))}
    </nav>
  );
}

export default MainNav;
