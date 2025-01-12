"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { CiMenuBurger } from "react-icons/ci";
import Headroom from "react-headroom";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    // { name: "Contact", href: "/contact" },
  ];

  const pathname = usePathname();
  const activeLink = (link) => {
    return pathname === link.href
      ? "underline decoration-2 decoration-[#bf1c2c] text-[#bf1c2c] font-bold"
      : "";
  };

  const navMenuRef = useRef(null);
  const menuItemsRef = useRef([]);
  const navButtonRef = useRef(null);
  const timelineRef = useRef(null);

  const openMenu = () => {
    if (!timelineRef.current) {
      timelineRef.current = gsap.timeline({ paused: true });

      timelineRef.current
        .to(navMenuRef.current, {
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        })
        .from(menuItemsRef.current, {
          opacity: 0,
          x: 50,
          stagger: 0.2,
          duration: 0.5,
          ease: "power2.out",
        })
        .from(navButtonRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.4,
          ease: "power2.out",
        });
    }

    timelineRef.current.play();
  };

  const closeMenu = () => {
    if (timelineRef.current) {
      timelineRef.current.reverse();
    }
  };

  return (
    <>
      <Headroom>
        <div className="h-[15vh] flex justify-between items-center py-6 md:py-4 px-7 md:px-24 bg-white shadow-md z-50 relative">
          <Link href="/home" className="flex justify-center items-center gap-6">
            <Image src="feature-1.svg" alt="" className="" height={50} width={50}  />
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium w-5 whitespace-nowrap">
                PRANAVI
              </span>
              <span className="text-sm font-medium w-5 whitespace-nowrap">
                PEB CONSTRUCTIONS
              </span>
            </div>
          </Link>
          <div className="hidden md:flex justify-center items-center gap-6 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={activeLink(link)}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="outline" asChild>
              <Link href={"/quote"}>Get a Quote</Link>
            </Button>
          </div>
          <div className="block md:hidden">
            <CiMenuBurger
              onClick={openMenu}
              className="text-4xl cursor-pointer text-gray-700 hover:text-gray-900 transition"
            />
          </div>
        </div>
      </Headroom>
      <div
        ref={navMenuRef}
        className="fixed top-0 right-0 w-full h-full bg-black transform translate-x-full z-50"
      >
        <ul className="flex flex-col items-center justify-center h-full text-white text-5xl space-y-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              onClick={closeMenu}
              href={link.href}
              className={activeLink(link)}
              ref={(el) => {
                if (el && !menuItemsRef.current.includes(el)) {
                  menuItemsRef.current[index] = el;
                }
              }}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="outline" asChild className="w-1/2 h-12 text-black text-2xl" onClick={closeMenu} ref={navButtonRef}>
            <Link href={"/quote"}>Get a Quote</Link>
          </Button>
        </ul>
        <IoMdClose
          onClick={closeMenu}
          className="absolute top-5 right-5 text-4xl text-white cursor-pointer hover:text-gray-400 transition"
        />
      </div>
    </>
  );
};

export default Navbar;
