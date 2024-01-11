import { useTranslations, createTranslator } from "next-intl";
import HomeBanner from "./components/homeBanner";
import About from "./components/about";
import Feature from "./components/feature";
import VisionMission from "./components/visionMission";
import WhyOurBrand from "./components/whyOutBrand";
import HomeGames from "./components/homeGames";
import Contact from "./components/contact";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });

  return {
    title: t("home.title") + " " + t("home.description"),
    description: t("home.description"),
    openGraph: {
      images: ["../assets/images/logo.png"],
    },
  };
}

export default async function Home({ params }) {
  console.log(params);
  return (
    <main className="flex flex-col">
      <HomeBanner />
      <About />
      <Feature />
      <VisionMission />
      <WhyOurBrand />
      <HomeGames />
      <Contact />
    </main>
  );
}
