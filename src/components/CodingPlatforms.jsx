import React from 'react';

const platforms = [
  {
    name: 'LeetCode',
    username: 'sim_ran05',
    link: 'https://leetcode.com/u/Sim_ran05/',
    bgColor: 'bg-yellow-400',
  },
  {
    name: 'HackerRank',
    username: 'simrankumar03',
    link: 'https://www.hackerrank.com/profile/simrankumarisk03',
    bgColor: 'bg-green-500',
  },
  {
    name: 'Codeforces',
    username: 'Simran05',
    link: 'https://codeforces.com/profile/Simran05',
    bgColor: 'bg-blue-500',
  },
  {
    name: 'CodeChef',
    username: 'simran06',
    link: 'https://www.codechef.com/users/simran06',
    bgColor: 'bg-gray-800',
  },
];

const CodingPlatforms = () => {
  return (
    <section
      id="codingplatforms"
      className="bg-gray-50 px-4 py-10" // reduced padding, removed min-h-screen
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Coding Platforms
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center p-5 rounded-lg shadow-lg hover:scale-105 transition transform ${platform.bgColor} text-white`}
            >
              <span className="text-3xl font-bold mb-2">{platform.name.charAt(0)}</span>
              <h3 className="text-xl font-semibold">{platform.name}</h3>
              <p className="text-sm mt-1">{platform.username}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingPlatforms;
