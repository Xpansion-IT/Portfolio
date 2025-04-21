import HeroSection from "@/app/[locale]/_components/hero-section";
import ServicesSection from "@/app/[locale]/_components/services-section";
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
