"use client";

import walletIcon from "../../wallet-icon.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
  const handleAboutClick = () => {
    // ToDo: About page
    console.log("clicked about! summond dialog!");
  };

  return (
    <div className="mb-6 flex flex-row">
      <Image src={walletIcon} width={40} height={40} alt="wallet icon" />
      <h2 className="scroll-m-20 pt-1 text-3xl font-bold tracking-tight first:mt-0">
        Simple
        <span className="ml-2 text-green-600">expense tracker</span>
      </h2>
      <div className="lg:flex lg:flex-1 lg:justify-end">
        <Button
          variant="link"
          className="text-xl font-light tracking-tight"
          onClick={handleAboutClick}
        >
          About
        </Button>
      </div>
    </div>
  );
};

export default Header;
