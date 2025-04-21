import SiteLogo from "@/components/branding/site-logo";
import ButtonPrimary from "@/components/ui/button-primary";
import ContentWrapper from "@/components/wrappers/content-wrapper";
import NavDesktop from "./nav-desktop";
import NavMobile from "./nav-mobile";
import LanguageSwitcher from "./language-switcher";
import { getTranslations } from "next-intl/server";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "@/i18n/navigation";

export default async function SiteHeader() {
  const t = await getTranslations("SiteHeader");

  return (
    <ContentWrapper className="fixed top-0 left-0 z-[500] w-full h-16 border-b border-secondary/10 bg-background/90 backdrop:blur-2xl px-2 md:px-0">
      <nav className="flex h-full items-center justify-between gap-4">
        {/* Logo */}
        <SiteLogo />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center">
          <NavDesktop t={t} />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-end">
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link href="/">
              <ButtonPrimary>
                {t("getStartedButton")} <FaArrowRight />
              </ButtonPrimary>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center gap-2">
          <LanguageSwitcher />
          <NavMobile />
        </div>
      </nav>
    </ContentWrapper>
  );
}
