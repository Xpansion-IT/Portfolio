"use client";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavMobile() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex md:hidden  justify-center items-center">
      <button onClick={() => setOpen(!open)}>
        {open ? (
          <IoMdClose className="text-text text-xl " />
        ) : (
          <GiHamburgerMenu className="text-text text-xl" />
        )}
      </button>
    </div>
  );
}
