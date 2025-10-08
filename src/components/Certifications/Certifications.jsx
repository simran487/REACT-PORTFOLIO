import React from 'react';
import SectionTitle from '../common/SectionTitle';
import CertificationCard from './CertificationCard';
import DBMS from '../../assets/pdf_files/DataBaseManagementSystem.pdf';
import PM from '../../assets/pdf_files/FoundationsOfProjectManagement.pdf';
import SE from '../../assets/pdf_files/INFOSYS_12022002026021.pdf';

const certifications = [
  { name: 'Data Base Management System', link: DBMS },
  { name: 'Foundations of Project Management', link: PM },
  { name: 'Software Engineering and Agile software development', link: SE },
];

const Certifications = () => {
  return (
    <section id="certifications" className="bg-gray-100 px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title Component */}
        <SectionTitle title="Certifications" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} name={cert.name} link={cert.link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
