import React from "react";
import { navlinks, socialMedia, locations } from "../data/data";
import { Circle } from "lucide-react";

function Footer() {
  return (
    <div className="pt-[5rem] pb-[2rem] px-[5%] mx-auto bg-[#121820] text-white flex flex-col ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 text-white">
        <div className="flex flex-col justify-start items-start gap-8">
        <img src="/logoBlack.svg" alt="Logo" className="w-[200px]" />

          <p className="text-justify md:text-left">
            We are a Rwandan-based IT solutions company delivering cutting-edge
            technology services across industries. With a passion for innovation
            and a team of experienced professionals, we bring world-class IT
            services to your doorstep—efficiently, securely, and affordably.
          </p>
          <span className="flex flex-row gap-4 items-center">
            {socialMedia.map((media) => (
              <a
                href={media.link}
                target="_blank"
                className="bg-white text-orange-500 p-2 rounded text-[20px] hover:text-white hover:bg-orange-500 transition-all duration-200"
              >
                {media.icon}
              </a>
            ))}
          </span>
        </div>

        <div className="flex flex-col justify-start items-start gap-3">
          <div>
            <h2 className="font-orbitron text-[20px] font-semibold mb-5">
              Quick Links
            </h2>
            {navlinks.map((navlink) => (
              <a
                href={navlink.link}
                className="flex flex-row items-center gap-2 mb-4 hover:text-orange-500 transition-all duration-150"
              >
                <Circle strokeWidth={1.5} size={20} color="#F97316" />
                {navlink.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <div>
            <h2 className="font-orbitron text-[20px] font-semibold mb-5">
              Reach Out
            </h2>
            {locations.map((location) => (
              <a
                href={location.link}
                className="flex flex-row items-center gap-2 mb-4 hover:text-orange-500 transition-all duration-150"
              >
                <p className="text-orange-500"> {location.icon}</p>
                {location.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <hr className="bg-white my-10" />
      <h1 className="font-orbitron text-[30px] md:text-[60px] font-semibold flex justify-center items-center gap-2">
        <span className="text-orange-500 animate-pulse">Buffer </span>Technologies.</h1>
    </div>
  );
}

export default Footer;
