import ButtonPrimary from "@/components/ui/button-primary";
import ContentWrapper from "../../../components/wrappers/content-wrapper";
import ButtonSecondary from "@/components/ui/button-secondary";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { TFunction } from "@/types/i18n";

export default function HeroSection({ t }: { t: TFunction }) {
  return (
    <ContentWrapper className="bg-background-dark">
      <section className="py-16 md:py-28 gap-8 flex items-center justify-between flex-col md:flex-row">
        <div className="space-y-5 flex-1">
          <div className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-accent w-fit">
            {t("heroBadge")}
          </div>
          <h1 className="text-4xl font-bold tracking-tighter text-text lg:text-5xl xl:text-6xl/none">
            {t.rich("heroTitle", {
              span: (span) => <span className="text-accent">{span}</span>,
            })}
          </h1>
          <p className="max-w-[600px] text-text/70 text-base lg:text-lg">
            {t("heroSubTitle")}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <ButtonPrimary size="lg" className="gap-3">
              {t("heroGetStartedButton")} <FaArrowRight />
            </ButtonPrimary>
            <ButtonSecondary size="lg" variant="outline">
              {t("heroOurServicesButton")}
            </ButtonSecondary>
          </div>
        </div>
        <div className="aspect-square max-h-[440px] w-full relative rounded-lg flex-1">
          <Image
            src={"/images/branding/hero.png"}
            alt="test"
            fill={true}
            className="object-cover"
          />
        </div>
      </section>
    </ContentWrapper>
  );
}
