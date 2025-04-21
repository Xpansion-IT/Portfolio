import SiteLogo from "@/components/branding/site-logo";
import ButtonPrimary from "@/components/ui/button-primary";
import ContentWrapper from "@/components/wrappers/content-wrapper";
import Link from "next/link";
import NavDesktop from "./nav-desktop";
import NavMobile from "./nav-mobile";
import { getTranslations } from "next-intl/server";
import { FaArrowRight } from "react-icons/fa";

export default async function SiteHeader() {
  const t = await getTranslations("SiteHeader");
  return (
    <ContentWrapper
      className={`fixed px-2 md:px-0 top-0 left-0 w-screen bg-background/90 border-b border-b-secondary/10 z-[500] h-16 backdrop:blur-2xl`}
    >
      <nav className="flex items-center h-full justify-between gap-2">
        <SiteLogo />

        <NavDesktop t={t} />

        <Link href={"/"} className="hidden md:block">
          <ButtonPrimary>
            {t("getStartedButton")} <FaArrowRight />
          </ButtonPrimary>
        </Link>

        <NavMobile />
      </nav>
    </ContentWrapper>
  );
}
