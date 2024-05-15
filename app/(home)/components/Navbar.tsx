import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';

export default function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      link: 'https://github.com/adityanuriskandar17',
      label: 'Github',
      icon: SiGithub,
    },
    {
      link: 'https://www.linkedin.com/in/aditya-nur-iskandar-82ba77181/',
      label: 'Linkedin',
      icon: SiLinkedin,
    },
    {
      link: 'https://www.instagram.com/adityanuriskandar_/',
      label: 'Instagram',
      icon: SiInstagram,
    },
  ];

  return (
    <nav className={cn('py-10 flex justify-between items-center', className)}>
      <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>
        Aditya Nur Iskandar 🧑🏻
      </h1>
      <div className='flex items-center gap-5'>
        {socials.map((social, index) => {
          const Icon = social.icon;

          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className='w-5 h-5 hover:scale-125 transition-all' />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
