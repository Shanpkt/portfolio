import React from "react";

import lifeCart from "../assets/lifecart.png"
import reccipibook from "../assets/recipibook.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: lifeCart,
      link: 'https://lifecart.vercel.app/',
      repo: 'https://github.com/Shanpkt/Lifecart'
    },
    {
      id: 1,
      src: reccipibook,
      link: 'https://recipi-book.vercel.app/',
      repo: 'https://github.com/Shanpkt/RecipiBook'
    },
    
     
   
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
                
              </div>
              <div style={{width:"100%",border:"1px solid",paddingLeft:"10px"}}>
                 <h3 style={{fontSize:"16px",marginBottom:"20px"}}>Lifecart - Acloath shooping Website</h3>
                 <p >user can buy cloaths from this website</p>
                 <p>user has option to choose size and color</p>
                 <p>has facility of choosing the catageroit </p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
