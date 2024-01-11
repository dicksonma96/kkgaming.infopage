import "./style.scss";
import BrandLogo from "../brandLogo";
import MainNav from "../mainNav";
import MobileMenu from '../mobileMenu'
import LanguagePicker from "../languagePicker";
import HeaderWrapper from "./headerWrapper";
import { useLocale } from "next-intl";

function Header() {
  return (
    <HeaderWrapper>
      <BrandLogo />
      <MainNav/>
      <LanguagePicker locale={useLocale()} />
      <MobileMenu locale={useLocale()} />
    </HeaderWrapper>
  );
}

export default Header;
