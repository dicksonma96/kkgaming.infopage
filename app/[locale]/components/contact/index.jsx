import { useTranslations } from "next-intl";
import ClientContent from "./clientContent";
import { sendEmail } from "../../utils/sendEmail";
import "./style.scss";

function Contact() {
  const t = useTranslations();
  const label = {
    title: t("home.contact.title"),
    name: t("home.contact.name"),
    company: t("home.contact.company"),
    email: t("home.contact.email"),
    phone_number: t("home.contact.phone_number"),
    message: t("home.contact.message"),
    submit: t("buttons.submit-btn"),
  };

  async function SendEmail(formData) {
    "use server";
    try {
      console.log("sending");
      let res = await sendEmail("dicksonma96@gmail.com", "subject", "HIHI");
      return res;
    } catch (e) {
      // console.log(e);
    }
  }

  return (
    <>
      <ClientContent label={label} submit={SendEmail} />
    </>
  );
}

export default Contact;
