"use client";
import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 mb-5">
      <button
        className="flex justify-between w-full py-4 text-2xl font-semibold text-left text-black focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="py-2 text-gray-800 transition-all duration-500 ease-out text-lg">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion: React.FC = () => {
  return (
    <div className="h-screen bg-gray-100">
      <h1 className="text-7xl vast-shadow-regular font-extrabold flex justify-center items-center pt-36">
        FAQs
      </h1>
      <div className="w-full mt-24 max-w-6xl mx-auto">
        <AccordionItem
          title="What types of accounts can I open with your bank?"
          content="We offer savings accounts."
        />
        <AccordionItem
          title="How do I check my account balance?"
          content="You can check your account balance via online banking."
        />
        <AccordionItem
          title="How do I change my account details?"
          content="You can update your details through online banking."
        />
        <AccordionItem
          title="How do I reset my online banking password?"
          content="You can reset your password by clicking on the “Forgot Password” link on the login page."
        />
        <AccordionItem
          title="Is banking secure?"
          content="Yes, our mobile banking app uses advanced encryption and security protocols to protect your information. "
        />
      </div>
    </div>
  );
};

export default Accordion;
