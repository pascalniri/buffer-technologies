import React from "react";

const Partners = () => {
  const logos = [
    {
      img: "/Globodox.png",
      link: "https://www.globodox.com/",
    },
    {
      img: "/birlamedisoft.png",
      link: "https://birlamedisoft.com/",
    },
    {
      img: "/Globodox.png",
      link: "https://www.globodox.com/",
    },
    {
      img: "/birlamedisoft.png",
      link: "https://birlamedisoft.com/",
    },
  ];

  return (
    <div className="px-[5%] py-[2rem] overflow-hidden relative">
      <div className="relative">
        {/* First scrolling track */}
        <div className="flex animate-scroll whitespace-nowrap w-[200%]">
          {logos.map((logo, index) => (
            <a
              href={logo.link}
              target="_blanck"
              key={`first-${index}`}
              className="inline-block px-10"
            >
              <img
                src={logo.img}
                alt="partner logo"
                className="h-16 object-contain"
              />
            </a>
          ))}
        </div>

        {/* Second scrolling track (duplicate for seamless loop) */}
        <div className="flex animate-scroll whitespace-nowrap w-[200%] absolute top-0 left-[100%]">
          {logos.map((logo, index) => (
            <a
              href={logo.link}
              target="_blanck"
              key={`first-${index}`}
              className="inline-block px-10"
            >
              <img
                src={logo.img}
                alt="partner logo"
                className="h-16 object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Add this to your global CSS or use a CSS-in-JS solution */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 50s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Partners;
