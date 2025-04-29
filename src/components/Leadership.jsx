import { Circle, Mail, Phone } from "lucide-react";
import React from "react";
import { members } from "../data/data";

const Leadership = () => {
  return (
    <div id="contact" className="text-[#121820] flex flex-col justify-center items-center px-[5%] mx-auto py-[8rem]">
      <span className="animate-bounce flex flex-row gap-2 items-center">
        <Circle strokeWidth={2} size={15} color="orange" />
        <p className="font-medium">Leadership</p>
      </span>
      <h1 className="font-orbitron text-center font-semibold text-[30px] md:text-[40px] mt-3 mb-5">
        Meet Our <span className="text-orange-500">Leadership Team</span>
      </h1>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5">
        {members.map((member) => (
          <div key={member.name} className="shadow-lg p-8 rounded-[10px]">
            <div className="flex flex-col md:flex-row items-center gap-5">
              <span className="h-[150px] w-[150px] bg-gray-500 rounded-full overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover"/>
              </span>
              <span className="flex flex-col justify-center items-center text-center md:text-left md:justify-start md:items-start gap-2">
                <h1 className="font-orbitron font-semibold text-[20px] ">
                  {member.name}
                </h1>
                <p className="text-orange-500 font-medium">{member.role}</p>
              </span>
            </div>
            <hr className="my-8" />
            <div className="flex flex-col justify-start items-start gap-4">
              <span className="flex items-center gap-3">
                <Phone strokeWidth={1.5} color="orange" />
                <p className="font-medium">{member.call}</p>
              </span>
              <span className="flex items-center gap-3">
              <Mail strokeWidth={1.5} color="orange" />
                <a href={member.link} target="_blanck" className="font-medium hover:text-orange-400 duration-150">{member.email}</a>
              </span>
            </div>
            <a href={member.link} target="_blanck">
            <button className="bg-orange-500 text-white px-[30px] py-[15px] w-full mt-8 rounded-full hover:bg-orange-600 transition duration-300">
                Send Email
            </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
