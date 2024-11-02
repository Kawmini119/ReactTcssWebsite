import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Where to host your frontend projects.",
      tags: ["Hosting", "Projects"],
    },
    {
      title: "How to quickly build your developer portfolio.",
      tags: ["Tips", "Portfolio"],
    },
    {
      title: "Frontend Practice and how it works.",
      tags: ["Projects", "How-to"],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <main className="flex flex-col items-center text-center p-6 md:p-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-dmSerif mt-6 md:mt-10 mb-2">Frontend</h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-dmSerif mb-8">Practice Blog</h1>
        <p className="text-md md:text-lg lg:text-xl font-archivo text-black-700 mb-10 md:mb-20 max-w-2xl mx-auto">
          Covering a wide range of topics, including project tutorials, responsive design,
          accessibility, testing, helpful tips, and more.
        </p>

        <div className="w-full max-w-4xl">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-black py-4 md:py-6">
              <h2 className="text-lg md:text-xl lg:text-2xl font-dmSerif font-semibold text-[#333333] hover:underline text-left mb-2 md:mb-0">
                {post.title}
              </h2>
              <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                {post.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-black text-white text-xs md:text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;
