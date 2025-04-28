import { Circle } from "lucide-react";
import React from "react";
import { clients } from "../data/data";

const Clients = () => {
  return (
    <div id="clients" className="bg-gray-200 px-[5%] mx-auto flex flex-col justify-center items-center py-[8rem]">
      <span className="animate-bounce flex flex-row gap-2 items-center">
        <Circle strokeWidth={2} size={15} color="orange" />
        <p className="font-medium">Clients</p>
      </span>
      <h1 className="font-orbitron text-center font-semibold text-[30px] md:text-[40px] mt-3 mb-5">
        We are proud to have{" "}
        <span className="text-orange-500">worked with:</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {clients.map((client) => (
          <div key={client.name} className="flex flex-col">
            <span className="h-[200px] w-ful rounded-t-[20px] overflow-hidden group">
              <img
                src={client.image}
                alt={client.name}
                className="w-full h-full bg-cover bg-center object-cover group-hover:scale-110 duration-200"
              />
            </span>
            <span className="bg-orange-500 text-white text-center p-2 flex justify-center items-center">{client.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
