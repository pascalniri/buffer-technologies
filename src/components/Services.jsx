import { Circle, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { services } from "../data/data";

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  // Number of services to show initially
  const initialServiceCount = 4;
  // Services to display based on state
  const displayedServices = showAll ? services : services.slice(0, initialServiceCount);

  return (
    <div id="services" className="flex flex-col font-quicksand px-[5%] mx-auto pb-[8rem]">
      <span className="animate-bounce flex flex-row gap-2 items-center">
        <Circle strokeWidth={2} size={15} color="orange" />
        <p className="font-medium">Services</p>
      </span>
      <h1 className="font-orbitron font-semibold text-[30px] md:text-[40px] mt-3 mb-5">
        Explore What <span className="text-orange-500">We Do!</span>
      </h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
        {displayedServices.map((service, index) => (
          <div key={index} className="flex flex-col">
            <div className="h-[200px] w-full rounded-[10px] overflow-hidden group">
              <img 
                src={service.image} 
                alt={service.title} 
                className="h-full w-full object-cover bg-center bg-no-repeat group-hover:scale-105 duration-200" 
              />
            </div>
            <span className="flex flex-col justify-start items-start p-2">
              <h2 className="font-semibold">{service.title}</h2>
              <p className="text-gray-500 text-[14px]">{service.desc}</p>
            </span>
          </div>
        ))}
      </div>

      {services.length > initialServiceCount && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-8 flex items-center justify-center gap-2 text-orange-500 font-medium mx-auto"
        >
          {showAll ? (
            <>
              <ChevronUp size={18} />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown size={18} />
              Show More ({services.length - initialServiceCount} more)
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default Services;