import { notFound } from "next/navigation";
import { AppContextProvider } from "../context/AppContextProvider";
import Header from "./components/header";
import Footer from "./components/footer";
import IframePopup from "./components/iframePopup";
import ResponsiblePopup from "./components/responsiblePopup";
import ProgressBarProvider from "./components/progressBarProvider";
import "./global.scss";

const locales = ["en-us", "zh-cn", "th-th", "ms-ms"];

export default async function LocaleLayout({ children, params: { locale } }) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="favicon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="favicon-512x512.png"
        />

        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="180x180"
          href="apple-touch-icon"
        />
      </head>
      <body>
        <AppContextProvider>
          <Header />
          <ProgressBarProvider>{children}</ProgressBarProvider>
          <Footer />
          <IframePopup />
          <ResponsiblePopup />
        </AppContextProvider>
      </body>
    </html>
  );
}
