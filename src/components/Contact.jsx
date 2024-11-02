import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#FAEBD7] min-h-screen flex flex-col items-center px-6 md:px-20 py-10 md:py-20">
      <div className="max-w-lg w-full text-center mb-10 md:mb-14">
        <h1 className="text-4xl md:text-5xl font-dmSerif font-bold mb-6 md:mb-14">Contact us.</h1>
        <p className="text-md md:text-lg">
          You may find that our <a href="/faq" className="underline">FAQ page</a> has the answers that
          you are looking for. If not, feel free to reach out!
        </p>
      </div>
      
      <form className="bg-[#FAEBD7] w-full max-w-md md:max-w-lg space-y-4 md:space-y-6">
        <div>
          <label className="block font-semibold mb-2 text-left text-sm md:text-base" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-black px-4 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label className="block font-semibold mb-2 text-left text-sm md:text-base" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-black px-4 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="email@website.com"
          />
        </div>
        
        <div>
          <label className="block font-semibold mb-2 text-left text-sm md:text-base" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full border border-black px-4 py-2 text-sm md:text-base h-32 md:h-48 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="What would you like to say?"
          ></textarea>
        </div>
        
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 border-2 border-black font-semibold bg-transparent hover:bg-black hover:text-white transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
