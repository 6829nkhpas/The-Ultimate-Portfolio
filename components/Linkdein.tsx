// components/LinkedInProfile.tsx

'use client'; // Required for components using hooks in Next.js App Router

import React, { useEffect, useState } from 'react';

// 1. Define the structure of your profile data with TypeScript interfaces
interface Certification {
  name: string;
  issuer: string;
  url?: string;
}

interface Skill {
  name: string;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface LinkedInProfile {
  name: string;
  headline: string;
  profilePhotoUrl: string; // URL to your profile picture
  profileUrl: string; // URL to your LinkedIn profile
  location: string;
  summary: string;
  skills: Skill[];
  experience: Experience[];
  certifications: Certification[];
}

// 2. Manually fill in your profile information here
// I've added placeholders based on your public profile. Update them with your details!
const profileData: LinkedInProfile = {
  name: 'Naman Sharma',
  headline: 'Frontend Developer | React.js | Next.js | TypeScript | Crafting Modern Web Experiences',
  profilePhotoUrl: 'https://media.licdn.com/dms/image/D4D03AQH3OaE4d-m3fQ/profile-displayphoto-shrink_400_400/0/1715839218320?e=1727913600&v=beta&t=8mU_321Y5X01mJq0bJ4V3sA8fC9G9R_mP0bS1xJq4jY', // Found this public URL, you can replace it with a higher quality one
  profileUrl: 'https://www.linkedin.com/in/namankh/',
  location: 'Ghaziabad, Uttar Pradesh, India',
  summary:
    "I'm a passionate Frontend Developer specializing in creating dynamic and responsive web applications. With a strong foundation in React.js, Next.js, and TypeScript, I enjoy turning complex problems into beautiful, intuitive interfaces. I'm always eager to learn new technologies and improve my craft.",
  skills: [
    { name: 'React.js' },
    { name: 'Next.js' },
    { name: 'TypeScript' },
    { name: 'JavaScript (ES6+)' },
    { name: 'Tailwind CSS' },
    { name: 'Redux' },
    { name: 'HTML5 & CSS3' },
    { name: 'Git & GitHub' },
    { name: 'REST APIs' },
    { name: 'Node.js' },
  ],
  experience: [
    {
      role: 'Frontend Developer',
      company: 'Your Company Name',
      period: '2023 - Present',
      description:
        'Developed and maintained web applications using React and Next.js, resulting in a 20% increase in user engagement. Collaborated with UI/UX designers to implement pixel-perfect designs.',
    },
    // Add more experience objects here
  ],
  certifications: [
    {
      name: 'React - The Complete Guide',
      issuer: 'Udemy',
      url: 'YOUR_CERTIFICATION_URL_HERE',
    },
    {
      name: 'TypeScript for Professionals',
      issuer: 'Coursera',
    },
    // Add more certification objects here
  ],
};

const LinkedInProfile: React.FC = () => {
  // State to hold the profile data and simulate loading
  const [profile, setProfile] = useState<LinkedInProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate an API call to load the data
    const timer = setTimeout(() => {
      setProfile(profileData);
      setLoading(false);
    }, 1000); // 1-second loading simulation

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (loading) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-blue-900 via-sky-800 to-blue-900 flex justify-center items-center p-4'>
        <div className='bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-md w-full border border-white/20 text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto'></div>
          <p className='text-white mt-4'>Loading LinkedIn profile...</p>
        </div>
      </div>
    );
  }

  if (!profile) return null; // Should not happen in this static setup

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-900 via-sky-800 to-blue-900 flex justify-center items-start p-4 md:items-center'>
      <div className='bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 md:p-8 max-w-4xl w-full border border-white/20 my-8'>
        {/* --- Header Section --- */}
        <div className='flex flex-col md:flex-row items-center text-center md:text-left md:space-x-8'>
          <img
            src={profile.profilePhotoUrl}
            alt={profile.name}
            className='w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/30 shadow-lg'
          />
          <div className='mt-4 md:mt-0'>
            <h1 className='text-3xl md:text-4xl font-bold text-white'>{profile.name}</h1>
            <p className='text-sky-200 mt-1 text-lg'>{profile.headline}</p>
            <p className='text-gray-300 text-sm mt-2'>{profile.location}</p>
          </div>
        </div>

        {/* --- About Section --- */}
        <div className='mt-8 pt-6 border-t border-white/20'>
          <h2 className='text-2xl font-bold text-white mb-3'>About</h2>
          <p className='text-gray-200 leading-relaxed'>{profile.summary}</p>
        </div>

        {/* --- Skills Section --- */}
        <div className='mt-8 pt-6 border-t border-white/20'>
          <h2 className='text-2xl font-bold text-white mb-4'>Skills</h2>
          <div className='flex flex-wrap gap-2'>
            {profile.skills.map((skill) => (
              <span key={skill.name} className='bg-sky-500/20 text-sky-200 px-3 py-1 rounded-full text-sm font-medium border border-sky-500/30'>
                {skill.name}
              </span>
            ))}
          </div>
        </div>
        
        {/* --- Experience Section --- */}
        <div className='mt-8 pt-6 border-t border-white/20'>
            <h2 className='text-2xl font-bold text-white mb-4'>Experience</h2>
            <div className='space-y-6'>
                {profile.experience.map((exp) => (
                    <div key={exp.company} className='bg-white/5 p-4 rounded-lg border border-white/10'>
                        <div className='flex justify-between items-baseline'>
                            <h3 className='font-bold text-lg text-white'>{exp.role}</h3>
                            <p className='text-sm text-gray-400'>{exp.period}</p>
                        </div>
                        <p className='text-md text-sky-300 mb-2'>{exp.company}</p>
                        <p className='text-sm text-gray-300'>{exp.description}</p>
                    </div>
                ))}
            </div>
        </div>


        {/* --- Certifications Section --- */}
        <div className='mt-8 pt-6 border-t border-white/20'>
          <h2 className='text-2xl font-bold text-white mb-4'>Certifications</h2>
          <div className='grid gap-4 md:grid-cols-2'>
            {profile.certifications.map((cert) => (
              <a
                key={cert.name}
                href={cert.url || '#'}
                target='_blank'
                rel='noopener noreferrer'
                className={`bg-white/5 p-4 rounded-lg block border border-white/10 ${cert.url ? 'hover:border-sky-400 hover:bg-white/10 transition-all' : 'cursor-default'}`}
              >
                <h3 className='font-semibold text-white'>{cert.name}</h3>
                <p className='text-sm text-gray-300'>Issued by {cert.issuer}</p>
              </a>
            ))}
          </div>
        </div>

        {/* --- CTA Button --- */}
        <div className='text-center mt-10'>
          <a
            href={profile.profileUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg transition-colors duration-200 font-bold text-lg'
          >
            View on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default LinkedInProfile;