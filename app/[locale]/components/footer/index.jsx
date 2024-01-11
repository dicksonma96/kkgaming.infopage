import { useTranslations } from "next-intl";
import "./style.scss";

function Footer() {
  const t = useTranslations();
  return (
    <section className="footer">
      <h2 className="section_title">{t("footer_tagline")}</h2>
      <footer>{t("footer")}</footer>
    </section>
  );
}

export default Footer;
