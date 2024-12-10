import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";

// Accordion Item Component
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 flex justify-between items-center"
      >
        <span className="text-lg font-medium">{title}</span>
        <span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-100">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

// Accordion Component
const Accordion = ({ items }) => {
  return (
    <div className="border rounded-lg shadow-md">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default Accordion;
