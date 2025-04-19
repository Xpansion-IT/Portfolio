import SiteLogo from "@/components/branding/site-logo";
import ButtonPrimary from "@/components/ui/button-primary";
import ContentWrapper from "@/components/wrappers/content-wrapper";
import Link from "next/link";
import { FaBeer } from "react-icons/fa";

export default function SiteHeader() {
  return (
    <ContentWrapper
      className={`fixed top-0 left-0 w-screen bg-background/90 border-b border-b-secondary/10 z-[500] h-15 backdrop:blur-2xl`}
    >
      <nav className="flex items-center h-full justify-between gap-2">
        <SiteLogo />

        <div className="flex gap-2">
          <a
            href="#"
            className="text-text/50 hover:text-text transition duration-150"
          >
            Blog
          </a>
          <Link
            href="#"
            className="text-text/50 hover:text-text transition duration-150"
          >
            About
          </Link>
        </div>

        <ButtonPrimary href={"/"}>Get Started</ButtonPrimary>
      </nav>
    </ContentWrapper>
  );
}
