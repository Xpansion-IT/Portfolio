import { TFunction } from "@/types/i18n";
import NavLink from "./nav-link";

export default function NavDesktop({ t }: { t: TFunction }) {
  return (
    <div className="gap-5 hidden md:flex">
      <NavLink href="#">{t("services")}</NavLink>
      <NavLink href="#">{t("about")}</NavLink>
      <NavLink href="#">{t("portfolio")}</NavLink>
      <NavLink href="#">{t("testimonials")}</NavLink>
      <NavLink href="#">{t("contact")}</NavLink>
    </div>
  );
}
