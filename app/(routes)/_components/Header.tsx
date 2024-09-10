"use client";

import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navLinks } from "@/constans";
import { usePathname } from "next/navigation";
import NavLinks from "./NavLinks";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="py-4 mt-4 flex justify-center items-center">
      <div className="flex flex-row justify-between items-center w-full mx-2">
        <Link href={"/"}>
          <Image
            src={"/logo.jpg"}
            alt="logo"
            width={50}
            height={50}
            className="rounded-full border-2 dark:border-teal"
          />
        </Link>

        <ul className="hidden md:flex items-center">
          {navLinks.map((link) => {
            const IsActive = link.route === pathname;

            return (
              <NavLinks
                key={link.route}
                IsActive={IsActive}
                label={link.label}
                route={link.route}
              />
            );
          })}
        </ul>

        <div className="max-md:hidden">
          <ModeToggle />
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <FaBars size={24} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <ul className="flex-col border-b-2 p-2 flex justify-center items-center mb-4">
                    {navLinks.map((link) => {
                      const IsActive = link.route === pathname;

                      return (
                        <NavLinks
                          key={link.route}
                          IsActive={IsActive}
                          label={link.label}
                          route={link.route}
                        />
                      );
                    })}
                  </ul>

                  <ModeToggle />
                </SheetTitle>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
