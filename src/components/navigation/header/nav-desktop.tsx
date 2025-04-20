import NavLink from "./nav-link";

export default function NavDesktop() {
  return (
    <div className="gap-5 hidden md:flex">
      <NavLink href="#">Services</NavLink>
      <NavLink href="#">About</NavLink>
      <NavLink href="#">Portfolio</NavLink>
      <NavLink href="#">Testimonials</NavLink>
      <NavLink href="#">Contact</NavLink>
    </div>
  );
}
