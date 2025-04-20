import ButtonPrimary from "@/components/ui/button-primary";
import ContentWrapper from "../../wrappers/content-wrapper";
import ButtonSecondary from "@/components/ui/button-secondary";
import { FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <ContentWrapper>
      <section className="py-16 md:py-28 gap-8 flex items-center justify-between flex-col md:flex-row">
        <div className="space-y-5 flex-1">
          <div className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-accent w-fit">
            Innovative Software Solutions
          </div>
          <h1 className="text-4xl font-bold tracking-tighter text-text lg:text-5xl xl:text-6xl/none">
            Transforming Ideas Into{" "}
            <span className="text-accent">Powerful</span> Software
          </h1>
          <p className="max-w-[600px] text-text/70 text-base lg:text-lg">
            We build custom software solutions that help businesses streamline
            operations, enhance customer experiences, and drive growth.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <ButtonPrimary size="lg" className="gap-3">
              Get Started <FaArrowRight />
            </ButtonPrimary>
            <ButtonSecondary size="lg" variant="outline">
              Our Services
            </ButtonSecondary>
          </div>
        </div>
        <div className="aspect-square max-h-[440px] w-full bg-secondary rounded-lg flex-1"></div>
      </section>
    </ContentWrapper>
  );
}
