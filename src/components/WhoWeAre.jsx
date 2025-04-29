import { Circle } from "lucide-react";
import React, { useState } from "react";
import { aboutContents } from "../data/data";

const WhoWeAre = () => {
  const [expanded, setExpanded] = useState(false);
  const [expandedItems, setExpandedItems] = useState(
    Array(aboutContents.length).fill(false)
  );

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const toggleItemExpand = (index) => {
    const newExpandedItems = [...expandedItems];
    newExpandedItems[index] = !newExpandedItems[index];
    setExpandedItems(newExpandedItems);
  };

  const mainDescription = `Buffer Technologies Ltd is fully Rwandan-owned and committed to
    elevating Rwanda's digital capacity through strategic tech solutions.
    Although officially registered recently, our team brings years of
    experience from working with leading institutions.`;

  return (
    <div id="about" className="scroll-mt-8 px-[5%] mx-auto py-[5rem]">
      <span className="animate-bounce flex flex-row gap-2 items-center">
        <Circle strokeWidth={2} size={15} color="orange" />
        <p className="font-medium">About Us</p>
      </span>
      <h1 className="font-orbitron font-semibold text-[30px] md:text-[40px] mt-3 mb-5">
        Who We <span className="text-orange-500">Are!</span>
      </h1>

      <p className="text-gray-500 w-full text-justify md:text-left md:w-[50%]">
        Buffer Technologies Ltd is fully Rwandan-owned and committed to
        elevating Rwanda's digital capacity through strategic tech solutions.
        Although officially registered recently, our team brings years of
        experience from working with leading institutions.
      </p>

      <h3 className="font-semibold mt-5">The Safety Service in IT is our Great Concern!</h3>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {aboutContents.map((content, index) => (
          <div
            key={index}
            className="flex flex-row justify-start items-start gap-5 p-5 border-t-[4px] border-orange-500"
          >
            <img src={content.icon} alt={content.heading} />
            <div className="flex flex-col justify-start items-start">
              <span className="font-orbitron flex items-center gap-2 font-semibold mb-2">
                <p className="text-orange-500">{content.number}.</p>
                <p>{content.heading}</p>
              </span>
              <p className="text-gray-500 text-justify md:text-left">
                {expandedItems[index]
                  ? content.desc
                  : content.desc.length > 330
                  ? `${content.desc.substring(0, 330)}...`
                  : content.desc}
                {content.desc.length > 330 && (
                  <button
                    onClick={() => toggleItemExpand(index)}
                    className="text-orange-500 ml-2 text-[14px] text-underlined font-semibold hover:underline focus:outline-none"
                  >
                    {expandedItems[index] ? "Read Less" : "Read More"}
                  </button>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoWeAre;
