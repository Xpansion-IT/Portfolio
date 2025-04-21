import HeroSection from "@/components/home/hero-section/hero-section";
import ServicesSection from "@/components/home/services-section/services-section";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: "XpansionIT",
    description: t("heroSubTitle"),
  };
}

export default async function HomePage() {
  const t = await getTranslations("HomePage");
  return (
    <>
      <HeroSection t={t} />
      <ServicesSection t={t} />
    </>
  );
}
