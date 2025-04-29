import { Circle } from "lucide-react";
import React from "react";
import { partners } from "../data/data";

const Clients = () => {
  return (
    <div
      id="clients"
      className="bg-gray-200 px-[5%] mx-auto flex flex-col justify-center items-center py-[8rem]"
    >
      <span className="animate-bounce flex flex-row gap-2 items-center">
        <Circle strokeWidth={2} size={15} color="orange" />
        <p className="font-medium">Partners</p>
      </span>
      <h1 className="font-orbitron text-center font-semibold text-[30px] md:text-[40px] mt-3 mb-5">
        See big Companies We{" "}
        <span className="text-orange-500">Are working with:</span>
      </h1>

      <div className="flex flex-wrap gap-5">
        {partners.map((partner) => (
          <a href={partner.link} target="_blanck" key={partner.name} className="flex flex-col w-full h-[300px] md:w-[400px] md:h-[400px]">
            <span className="h-[200px] w-ful bg-white p-3 rounded-t-[20px] overflow-hidden group">
              <img
                src={partner.image}
                alt={partner.name}
                className=" bg-cover bg-center group-hover:scale-110 duration-200"
              />
            </span>
            <span className="bg-orange-500 text-white text-center p-2 flex justify-center items-center">
              {partner.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Clients;
