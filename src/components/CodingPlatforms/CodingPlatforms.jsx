import React from 'react';
import SectionTitle from '../common/SectionTitle';
import PlatformCard from './PlatformCard';

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
    <section id="codingplatforms" className="bg-gray-50 px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title Component */}
        <SectionTitle title="Coding Platforms" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <PlatformCard
              key={index}
              name={platform.name}
              username={platform.username}
              link={platform.link}
              bgColor={platform.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingPlatforms;
