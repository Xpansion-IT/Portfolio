import SiteLogo from "@/components/branding/site-logo";
import ButtonPrimary from "@/components/ui/button-primary";
import ContentWrapper from "@/components/wrappers/content-wrapper";
import Link from "next/link";
import NavLink from "./nav-link";
import NavDesktop from "./nav-desktop";
import NavMobile from "./nav-mobile";
import ButtonSecondary from "@/components/ui/button-secondary";

export default function SiteHeader() {
  return (
    <ContentWrapper
      className={`fixed px-2 md:px-0 top-0 left-0 w-screen bg-background/90 border-b border-b-secondary/10 z-[500] h-16 backdrop:blur-2xl`}
    >
      <nav className="flex items-center h-full justify-between gap-2">
        <SiteLogo />

        <NavDesktop />

        <Link href={"/"} className="hidden md:block">
          <ButtonPrimary>Get Started</ButtonPrimary>
        </Link>

        <NavMobile />
      </nav>
    </ContentWrapper>
  );
}
