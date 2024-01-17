"use client";
import { usePathname } from "next-intl/client";
import langs_list from "../languagePicker/langs_list";
import Link from "next-intl/link";
import Image from "next/image";

function LangMenu() {
  const pathname = usePathname();

  return (
    <div className="lang_menu">
      {langs_list.map((lang, index) => {
        return (
          <Link
            key={index}
            href={pathname}
            locale={lang.value}
            className="lang_item rowc"
          >
            <Image src={lang.icon} alt={lang.label} />
            <span>{lang.label}</span>
          </Link>
        );
      })}
    </div>
  );
}

export default LangMenu;
