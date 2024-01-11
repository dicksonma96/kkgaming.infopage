"use client";

import "./style.scss";
import Image from "next/image";
import { usePathname } from "next-intl/client";
import useOpen from "@/app/hooks/useOpen";
import { useAppContext } from "@/app/context/AppContextProvider";
import Link from "next-intl/link";
import langs_list from "./langs_list";

function LanguagePicker({ locale }) {
  const pathname = usePathname();
  const { isOpen, toggle } = useOpen(false);
  const { mediaQuery } = useAppContext();

  {
    return mediaQuery != "small" ? (
      <div className="language_picker rowc">
        <Image
          className="selected_lang"
          src={langs_list.find((lang) => lang.value == locale).icon}
          alt={`${locale} logo`}
          onClick={toggle}
        />
        {isOpen && (
          <div className="lang_dropdown" onClick={toggle}>
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
        )}
      </div>
    ) : (
      <></>
    );
  }
}

export default LanguagePicker;
