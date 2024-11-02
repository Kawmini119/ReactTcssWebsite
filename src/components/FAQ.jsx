import React, { useState } from "react";

const faqData = [
  {
    question: "What is Frontend Practice?",
    answer: "Frontend Practice offers developers the opportunity to practice and improve their skills in design, interactions, animations, responsiveness, troubleshooting, and more by providing a selection of real websites for them to recreate from scratch...",
  },
  {
    question: "Where can I find images and icons?",
    answer: "Pexels and Pixabay are excellent sources for free stock photos, while Boxicons and Font Awesome offer a variety of free icons...",
  },
  {
    question: "Where is the code?",
    answer: "Frontend Practice does not provide any pre-written code, but we do offer a few resources to assist with each project...",
  },
  {
    question: "Where can I learn to code?",
    answer: "If you want a more structured approach to learning coding, consider taking Frontend Masters' Complete Intro to Web Development or Getting Started With CSS courses...",
  },
  {
    question: "Which languages do I use for these projects?",
    answer: "In short, you can use any programming language you desire for these practice projects...",
  },
  {
    question: "Why did you pick these websites?",
    answer: "The selection of websites featured on Frontend Practice is based on personal preference and takes into consideration various factors...",
  },
  {
    question: "Can I use these in my portfolio?",
    answer: "We encourage you to make these projects your own by incorporating your own colors, content, and images...",
  },
  {
    question: "Why does the live website not look like the project anymore?",
    answer: "How dare they update the website! We'll talk with their manager right away. If they don't respond, we'll periodically check the websites we feature...",
  },
  {
    question: "Where did some of the projects go?",
    answer: "Occasionally we will retire projects from the main collection if the design is no longer up to date or an archived version is not available...",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-8 min-h-screen p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-dmSerif text-center mb-2">Frequently Asked</h1>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-dmSerif text-center mb-10">Questions</h1>

      <div className="max-w-2xl lg:max-w-3xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-black rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 md:px-6 py-3 bg-[#faebd7] font-semibold text-base md:text-lg flex justify-between items-center"
            >
              <span className="flex items-center">
                {openIndex === index ? "▼" : "▶"}{" "}
                <span className="ml-2">{faq.question}</span>
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 md:px-6 py-3 text-gray-700 bg-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
